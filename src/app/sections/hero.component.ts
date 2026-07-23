import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'hr-hero',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
    <section class="relative overflow-hidden bg-surface">
      <div
        class="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-primary-light/30 blur-3xl"
        aria-hidden="true"
      ></div>

      <div class="container-hr relative grid gap-10 py-12 lg:grid-cols-2 lg:items-center lg:py-16">
        <!-- Copy -->
        <div hrReveal="left">
          <div class="mb-5 flex items-center gap-3">
            <img src="/assets/img/ratings-image.png" alt="Medical professionals using Practice Revenue Ops" class="h-9 w-auto" />
            <span class="text-sm font-medium text-muted">Trusted by Medical Practices</span>
          </div>

          <h1 class="font-heading text-4xl font-extrabold leading-[1.08] text-heading sm:text-5xl">
            Complete Healthcare Front Office
            <span class="text-primary"> &amp; Helping Medical Practices</span>
          </h1>
          <p class="mt-4 text-lg font-semibold text-heading">
            End-to-End Front Office, Medical Scribing,
Insurance Verification & Revenue Cycle Management
          </p>
          <p class="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Practice Revenue Ops provides comprehensive healthcare support solutions for independent medical practices. From appointment scheduling and insurance eligibility verification to medical scribing, patient engagement, and Revenue Cycle Management, our experienced professionals streamline daily operations so providers can focus on delivering exceptional patient care.
          </p>

          <div class="mt-7 flex flex-wrap gap-3">
            <a href="#" class="btn-primary">Explore Our Services</a>
            <a href="#" class="btn-ghost rounded-r1 border border-line px-6 py-3">
              <span class="grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] text-white" aria-hidden="true">▶</span>
              Schedule a Consultation
            </a>
          </div>

          <dl class="mt-9 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7">
            <div *ngFor="let s of stats">
              <dt class="font-heading text-2xl font-extrabold text-primary sm:text-3xl">{{ s.value }}</dt>
              <dd class="mt-1 text-xs leading-snug text-muted">{{ s.label }}</dd>
            </div>
          </dl>
        </div>

        <!-- Hero fade slider (auto-rotates specialties, like the source) -->
        <div hrReveal="right" class="relative">
          <div class="relative mx-auto aspect-square w-full max-w-lg">
            <img
              *ngFor="let img of slides; let i = index"
              [src]="'/assets/img/' + img"
              alt="Healthcare virtual assistant"
              class="absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-in-out"
              [class.opacity-100]="i === current()"
              [class.opacity-0]="i !== current()"
            />
          </div>
          <!-- dots -->
          <div class="mt-2 flex justify-center gap-2">
            <button
              *ngFor="let img of slides; let i = index"
              type="button"
              (click)="current.set(i)"
              class="h-2 rounded-pill transition-all"
              [class.w-6]="i === current()"
              [class.bg-primary]="i === current()"
              [class.w-2]="i !== current()"
              [class.bg-primary-light]="i !== current()"
              [attr.aria-label]="'Show slide ' + (i + 1)"
            ></button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent implements OnInit, OnDestroy {
readonly stats = [
  {
    value: '100%',
    label: 'Quality Focus'
  },
  {
    value: '24/7',
    label: 'Dedicated Operational Support'
  },
  {
    value: '100%',
    label: 'Focused on Practice Efficiency'
  }
];

  readonly slides = [
    'HVA-landing-page-Image.png',
    'DHVA-landing-page-Image.png',
    'VHVA-landing-page-Image.png',
    'OHVA-landing-page-Image.png',
  ];

  readonly current = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.current.set((this.current() + 1) % this.slides.length);
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}
