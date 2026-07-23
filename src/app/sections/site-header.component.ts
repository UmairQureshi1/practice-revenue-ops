import { Component, HostListener, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  children?: string[];
}

@Component({
  selector: 'hr-site-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, RouterLinkActive],
  template: `
    <header
      class="sticky top-0 z-50 border-b border-line/70 bg-white/95 backdrop-blur transition-shadow"
      [class.shadow-card]="scrolled()"
    >
      <div class="container-hr flex h-[92px] items-center justify-between gap-6">
        <!-- Brand -->
        <a [routerLink]="['/']" class="flex shrink-0 items-center" aria-label="Hello Rache home">
          <img
            src="/assets/img/Practice-Revenue-Ops-Logo-Horizontal.png"
            alt="Practice Revenue Ops Logo"
            class="h-14 h-16-logo w-auto"
          />
        </a>

        <!-- Desktop nav -->
        <nav class="hidden items-center gap-1 lg:flex">
          <div
            *ngFor="let item of nav"
            class="group relative"
          >
        <a
          [routerLink]="item.route"
          routerLinkActive="active-nav"
          [routerLinkActiveOptions]="{ exact: true }"
          class="nav-hover flex items-center gap-1 px-3 py-2 text-sm font-medium text-heading"
        >
  {{ item.label }}
              <svg
                *ngIf="item.children"
                class="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <div
              *ngIf="item.children"
              class="invisible absolute left-0 top-full w-64 translate-y-2 rounded-r2 border border-line bg-white p-2 opacity-0 shadow-card transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            >
              <a
                *ngFor="let child of item.children"
                href="#"
                class="block rounded-r1 px-3 py-2 text-sm text-muted transition-colors hover:bg-primary-ultra-light hover:text-primary-dark"
              >
                {{ child }}
              </a>
            </div>
          </div>
        </nav>

        <!-- Right actions -->
        <div class="hidden shrink-0 items-center lg:flex">
          <a href="#" class="btn-primary" routerLink="/contact">Schedule a Call</a>
        </div>

        <!-- Mobile toggle -->
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-r1 text-heading lg:hidden"
          (click)="mobileOpen.set(!mobileOpen())"
          [attr.aria-expanded]="mobileOpen()"
          aria-label="Toggle menu"
        >
          <svg *ngIf="!mobileOpen()" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg *ngIf="mobileOpen()" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile drawer -->
      <div
        *ngIf="mobileOpen()"
        class="border-t border-line bg-white lg:hidden"
      >
        <nav class="container-hr flex flex-col gap-1 py-4">
          <a
            *ngFor="let item of nav"
            [routerLink]="item.route"
            routerLinkActive='active-nav'
            [routerLinkActiveOptions]="{ exact: item.route === '/' }"
            class="rounded-r1 px-3 py-2 text-sm font-medium text-heading hover:bg-primary-ultra-light"
          >
            {{ item.label }}
          </a>
          <div class="mt-3">
            <a href="#" class="btn-primary w-full">Schedule a Call</a>
          </div>
        </nav>
      </div>
    </header>
  `,
})
export class SiteHeaderComponent {
  readonly mobileOpen = signal(false);
  readonly scrolled = signal(false);

  readonly nav: NavItem[] = [
    {
      label: 'About Us',
      route: '/about'
    },
    {
      label: 'Services',
      route: '/services'
      // children: [
      //   'Virtual Medical Scribe',
      //   'Virtual Medical Receptionist',
      //   'Virtual Administrative Assistant',
      //   'Virtual Optometry Assistant',
      //   'View More Services',
      // ],
    },
    { label: 'How We Work',
      route: '/how-we-work'
     },
    { label: 'Contact',
      route: '/contact'
     },
    // {
    //   label: 'Careers',
    //   children: [
    //     'Be a Healthcare VA (HVA)',
    //     'Be a Veterinary HVA (VHVA)',
    //     'Be a Dental HVA (DHVA)',
    //   ],
    // },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }
}
