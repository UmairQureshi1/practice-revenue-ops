import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

interface ServiceArea {
  title: string;
  img: string;
  tasks: string[];
}

@Component({
  selector: 'hr-specialties',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
    <section class="bg-white pb-16 lg:pb-24">
      <div class="container-hr">
        <div
          #track
          class="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:thin]"
          hrReveal
          (mouseenter)="pause()"
          (mouseleave)="resume()"
        >
          <article
            *ngFor="let s of specialties"
            class="card flex w-[300px] shrink-0 snap-start flex-col overflow-hidden text-center"
          >
            <div class="flex flex-1 flex-col p-5">
              <h3 class="font-heading text-lg font-bold text-heading sm:text-xl">{{ s.title }}</h3>
              <div class="mt-3 flex flex-1 flex-wrap content-center justify-center gap-2">
                <span
                  *ngFor="let t of s.tasks"
                  class="rounded-pill bg-primary-ultra-light px-2.5 py-1 text-[11px] font-medium text-primary-dark"
                >
                  {{ t }}
                </span>
              </div>
            </div>
            <img
              [src]="'/assets/img/' + s.img"
              [alt]="s.title"
              class="aspect-square w-full bg-white object-contain"
              loading="lazy"
            />
          </article>
        </div>
        
      </div>
    </section>
  `,
})
export class SpecialtiesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('track') track!: ElementRef<HTMLElement>;
  private timer?: ReturnType<typeof setInterval>;
  private paused = false;
  private readonly step = 320; // card 300 + gap 20

  ngAfterViewInit(): void {
    this.timer = setInterval(() => {
      if (this.paused || !this.track) return;
      const el = this.track.nativeElement;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + this.step, behavior: 'smooth' });
    }, 3000);
  }

  pause(): void { this.paused = true; }
  resume(): void { this.paused = false; }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  readonly specialties: ServiceArea[] = [
  {
    title: 'Front Office Management',
    img: 'Primary-Care-INdustry-Carousel.png',
    tasks: [
      'Phone Answering',
      'Appointment Scheduling',
      'Patient Registration',
      'Referral Coordination',
      'Reminder Calls',
      'Patient Communication',
    ],
  },
  {
    title: 'Insurance & Authorization',
    img: 'Optometry-Industry-Carousel.png',
    tasks: [
      'Insurance Verification',
      'Benefits Eligibility',
      'Prior Authorization',
      'Referral Management',
      'Claims Follow-up',
      'Documentation',
    ],
  },
  {
    title: 'Medical Scribing',
    img: '2-1.png',
    tasks: [
      'EMR Documentation',
      'SOAP Notes',
      'Clinical Notes',
      'Chart Preparation',
      'Documentation Review',
      'Real-Time Scribing',
    ],
  },
  {
    title: 'Revenue Cycle Management',
    img: 'Internal-Medicine-Industry-Carousel.png',
    tasks: [
      'Medical Billing',
      'Claims Processing',
      'Payment Posting',
      'Denial Management',
      'AR Follow-up',
      'Revenue Optimization',
    ],
  },
  {
    title: 'Patient Engagement',
    img: 'Dermatology-Industry-Carousel.png',
    tasks: [
      'Appointment Reminders',
      'Follow-up Calls',
      'Patient Outreach',
      'Care Coordination',
      'Recall Programs',
      'Patient Support',
    ],
  },
  {
    title: 'Administrative Support',
    img: 'Podiatry-Industry-Carousel.png',
    tasks: [
      'Data Entry',
      'Medical Records',
      'Reporting',
      'Workflow Coordination',
      'Provider Support',
      'Inbox Management',
    ],
  },
];
}
