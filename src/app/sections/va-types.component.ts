import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

interface VaType {
  title: string;
  description: string;
  icon: string;
  cover: string;
}

@Component({
  selector: 'hr-va-types',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, RevealDirective],
  template: `
    <section class="bg-white py-16 lg:py-24">
      <div class="container-hr">
        <div class="grid gap-6 lg:grid-cols-2 lg:items-end" hrReveal>
          <h2 class="font-heading text-3xl font-extrabold text-heading sm:text-4xl">
            Complete Healthcare Support Solutions
          </h2>
          <div>
            <p class="text-muted">
             Practice Revenue Ops provides dedicated healthcare professionals who integrate seamlessly into your existing workflows. From front-office operations and medical documentation to billing and revenue cycle management, we help your practice operate more efficiently.
            </p>
            <a href="#" class="btn-ghost mt-3">Explore Our Services <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div class="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <!-- Swapping cover image -->
          <div hrReveal="left" class="relative">
            <div class="relative mx-auto aspect-square w-full max-w-lg">
              <img
                *ngFor="let t of types; let i = index"
                [src]="'/assets/img/' + t.cover"
                [alt]="t.title"
                class="absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out"
                [ngClass]="i === active() ? 'opacity-100' : 'opacity-0'"
              />
            </div>
          </div>

          <!-- Auto-advancing accordion -->
          <div class="space-y-3" (mouseenter)="pause()" (mouseleave)="resume()">
            <div
              *ngFor="let t of types; let i = index"
              class="relative overflow-hidden"
            >
              <!-- left progress rail -->
              <span class="absolute inset-y-0 left-0 w-1 bg-primary-ultra-light" aria-hidden="true"></span>
              <span
                *ngIf="i === active()"
                class="absolute left-0 top-0 w-1 bg-primary"
                [style.animation]="'vaProgress ' + intervalMs + 'ms linear forwards'"
                aria-hidden="true"
              ></span>

              <button
                type="button"
                (click)="select(i)"
                class="flex w-full items-center gap-4 px-5 py-4 text-left"
                [attr.aria-expanded]="i === active()"
              >
                <img [src]="'assets/img/' + t.icon" [alt]="t.title" class="h-11 w-11 shrink-0 object-contain" loading="lazy" />
                <h3 class="font-heading text-base font-bold text-heading sm:text-lg">{{ t.title }}</h3>
                <svg
                  class="ml-auto h-5 w-5 shrink-0 text-primary transition-transform duration-300"
                  [ngClass]="i === active() ? 'rotate-180' : ''"
                  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                >
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>

              <!-- expandable body -->
              <div
                class="grid transition-all duration-300 ease-in-out"
                [ngClass]="i === active() ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
              >
                <div class="overflow-hidden">
                  <div class="px-5 pb-5 pl-[3.75rem]">
                    <p class="text-sm leading-relaxed text-muted">{{ t.description }}</p>
                    <a href="#" class="btn-ghost mt-3">More Details <span aria-hidden="true">→</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes vaProgress {
      0% { height: 0; }
      100% { height: 100%; }
    }
  `],
})
export class VaTypesComponent implements OnInit, OnDestroy {
  readonly intervalMs = 4000;
  readonly active = signal(0);
  private timer?: ReturnType<typeof setInterval>;
  private paused = false;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      if (this.paused) return;
      this.active.set((this.active() + 1) % this.types.length);
    }, this.intervalMs);
  }

  select(i: number): void {
    this.active.set(i);
  }

  pause(): void { this.paused = true; }
  resume(): void { this.paused = false; }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  readonly types: VaType[] = [
    {
      icon: 'HVA-ICON.png',
      cover: 'Jossa-VA-Slider-Section-Cover-Image.png',
      title: 'Healthcare Virtual Assistants',
      description: 'Free up your time and reduce administrative overload by delegating scheduling, patient communication, billing, insurance verification, and EMR documentation to your dedicated, HIPAA-trained Healthcare Virtual Assistant.',
    },
    {
      icon: 'DHVA-ICON.png',
      cover: 'Xyrel-VA-Slider-Section-Cover-Image.png',
      title: 'Dental Virtual Assistants',
      description: "Boost your dental practice's productivity and profitability by outsourcing appointment scheduling, insurance verification, treatment coordination, billing, and patient communication to a dedicated Dental Virtual Assistant.",
    },
    {
      icon: 'VHVA-ICON.png',
      cover: 'Renz-VA-Slider-Section-Cover-Image.png',
      title: 'Veterinary Virtual Assistants',
      description: 'Let your Veterinary Virtual Assistant manage scheduling, client communications, billing, insurance coordination, and administrative workflows — so you can focus on delivering exceptional care.',
    },
    {
      icon: 'OHVA-ICON.png',
      cover: 'Martin-VA-Slider-Section-Cover-Image.png',
      title: 'Optometry Virtual Assistants',
      description: 'Streamline scheduling, recall reminders, insurance verification, billing, and patient communication with a dedicated Optometry Virtual Assistant, so your team can focus on delivering exceptional eye care.',
    },
  ];
}
