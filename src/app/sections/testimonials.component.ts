import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

interface VideoTile {
  img: string;
  name: string;
}
interface Quote {
  quote: string;
  name: string;
  practice: string;
}
interface Impact {
  title: string;
  points: string[];
}
@Component({
  selector: 'hr-testimonials',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
    <section class="bg-purple-gradient py-16 text-white lg:py-24">
      <div class="container-hr">
        <div class="mx-auto max-w-3xl text-center" hrReveal="down">
          <h2 class="font-heading text-3xl font-extrabold text-white sm:text-4xl">Why Practices Choose Practice Revenue Ops</h2>
          <p class="mt-3 text-white/85">
           Practice Revenue Ops helps healthcare organizations improve operational efficiency, strengthen revenue performance, and deliver better patient experiences through comprehensive healthcare support services.
          </p>
        </div>

        <!-- Auto-rotating video testimonial carousel: rectangular cards, 3 per view -->
        <div
          #track
          class="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          hrReveal="in"
          (mouseenter)="pause()"
          (mouseleave)="resume()"
        >
          <figure
            *ngFor="let v of videos"
            class="group relative w-[calc(100%-1rem)] shrink-0 snap-start overflow-hidden rounded-r2 shadow-card sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <img
              [src]="'/assets/img/' + v.img"
              [alt]="v.name"
              class="aspect-video w-full bg-primary-dark object-cover"
            />
            <button
              type="button"
              class="absolute inset-0 grid place-items-center transition hover:bg-black/10"
              [attr.aria-label]="'Play ' + v.name"
            >
              <span
                class="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-primary shadow-card transition-transform group-hover:scale-110"
              >
                <svg class="ml-1 h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </button>
          </figure>
        </div>

        <!-- Quote cards -->
       <!-- Practice Revenue Ops Impact Cards -->
<div class="mt-8 grid gap-5 md:grid-cols-2">

          <div
            *ngFor="let impact of impacts; let i = index"
            hrReveal="up"
            [revealDelay]="i * 80"
            class="hover-lift rounded-r2 bg-white p-6 text-heading shadow-card"
          >
            <h3 class="font-heading text-xl font-extrabold text-primary">
              {{ impact.title }}
            </h3>

            <ul class="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li *ngFor="let point of impact.points" class="flex gap-2">
                <span class="text-gold">✓</span>
                {{ point }}
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('track') track!: ElementRef<HTMLElement>;
  private timer?: ReturnType<typeof setInterval>;
  private paused = false;

  ngAfterViewInit(): void {
    this.timer = setInterval(() => {
      if (this.paused || !this.track) return;
      const el = this.track.nativeElement;
      const first = el.firstElementChild as HTMLElement | null;
      const step = first ? first.offsetWidth + 24 : el.clientWidth / 3; // card + gap-6
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: 'smooth' });
    }, 3500);
  }

  pause(): void { this.paused = true; }
  resume(): void { this.paused = false; }
  ngOnDestroy(): void { if (this.timer) clearInterval(this.timer); }

readonly videos: VideoTile[] = [
  { img: '93de34dbac58d009f60963ef0c30b0d4.webp', name: 'Front Office Solutions' },
  { img: '11c7c0de8951ad0e81ab8d2b24c1ae0f.webp', name: 'Revenue Cycle Management' },
  { img: '270a52d144c8f798c8711769137aa25b.webp', name: 'Medical Scribing' },
  { img: 'c4804a676c7e86c8912240aa885b4936.webp', name: 'Insurance Verification' },
  { img: '56e7554811d29abcd2f3de484fc72d28.webp', name: 'Patient Engagement' },
  { img: '270a52d144c8f798c8711769137aa25b.webp', name: 'Administrative Support' },
];

// readonly quotes: Quote[] = [
//   {
//     quote:
//       'Practice Revenue Ops helps healthcare organizations streamline front office operations, reduce administrative workload, and improve patient satisfaction through efficient, reliable support services.',
//     name: 'Practice Revenue Ops',
//     practice: 'Healthcare Operations',
//   },
//   {
//     quote:
//       'Our experienced healthcare professionals support Revenue Cycle Management, Medical Scribing, Insurance Verification, Appointment Scheduling, and Patient Engagement so providers can focus on delivering quality care.',
//     name: 'Practice Revenue Ops',
//     practice: 'Healthcare Support Services',
//   },
// ];

readonly impacts: Impact[] = [
  {
    title: 'Practice Revenue Ops Impact',
    points: [
      '15+ hours per week of administrative time saved per provider.',
      '40% drop in billing errors and claim denial rework.',
      '15%–20% reduction in patient no-shows through dedicated outreach.'
    ]
  },
  {
    title: 'Operational Efficiency Gains',
    points: [
      '50%+ lower front-office labor costs.',
      '100% HIPAA-compliant operations.',
      '40% reduction in administrative overhead.'
    ]
  }
];
}
