import { Component } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

interface Service {
  key: 'frontoffice' | 'clinical' | 'revenue';
  title: string;
  body: string;
}

@Component({
  selector: 'hr-services',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, RevealDirective],
  template: `
    <section class="bg-white py-16 lg:py-24">
      <div class="container-hr">
        <div class="mx-auto max-w-3xl text-center" hrReveal>
          <h2 class="font-heading text-3xl font-extrabold text-heading sm:text-4xl">
            <span class="text-primary">Healthcare Operations</span> Solutions for Modern Medical Practices
          </h2>
          <p class="mt-4 text-muted">
            Practice Revenue Ops delivers comprehensive healthcare support
            services designed to improve operational efficiency, optimize
            revenue cycle performance, and enhance patient experiences.
            Our experienced professionals become an extension of your team,
            helping your practice focus on exceptional patient care.
          </p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          <article
            *ngFor="let s of services; let i = index"
            hrReveal="up"
            [revealDelay]="i * 100"
            class="grad-hover group relative flex flex-col items-center overflow-hidden rounded-r2 bg-purple-gradient p-8 text-center text-white shadow-card"
          >
            <div
              class="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10 transition-transform group-hover:scale-150"
              aria-hidden="true"
            ></div>
            <h3 class="relative font-heading text-2xl font-extrabold text-white sm:text-[1.6rem]">{{ s.title }}</h3>
            <p class="relative mt-3 flex-1 text-sm leading-relaxed text-white/90">{{ s.body }}</p>
            <div class="relative mt-6 flex flex-col items-center gap-4">
         <!-- Learn More link (currently hidden/disabled for future use) -->
              <!--
              <a href="#" class="text-sm font-semibold text-white underline-offset-4 hover:underline">
                Learn More
              </a>
              -->
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
readonly services: Service[] = [
  {
    key: 'frontoffice',
    title: 'Front Office Solutions',
    body:
      'Professional phone answering, appointment scheduling, reminder calls, patient check-in, and referral coordination that improve patient communication and operational efficiency.',
  },
  {
    key: 'clinical',
    title: 'Clinical Support Services',
    body:
      'Medical scribing, insurance eligibility verification, prior authorization, documentation support, and patient workflow management delivered by experienced healthcare professionals.',
  },
  {
    key: 'revenue',
    title: 'Revenue Cycle Management',
    body:
      'Comprehensive billing support, claims management, payment posting, denial reduction, and revenue optimization designed to strengthen your practice’s financial performance.',
  },
];
}
