import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

interface Prop {
  title: string;
  body: string;
  icon: string;
}

@Component({
  selector: 'hr-value-props',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
    <section class="bg-surface py-16 lg:py-20">
      <div class="container-hr grid gap-6 lg:grid-cols-3">
        <!-- Photo card -->
        <article hrReveal class="card flex flex-col overflow-hidden">
          <img
            src="/assets/img/Copy-of-Untitled-Design-1.png"
            alt="Healthcare professional"
            class="w-full bg-surface object-cover"
          />
          <div class="flex flex-1 flex-col p-6">
            <h3 class="font-heading text-lg font-bold text-heading">Why Practice Revenue Ops</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">
            Practice Revenue Ops provides healthcare organizations with
              comprehensive operational support including Front Office
              Management, Revenue Cycle Management, Medical Scribing,
              Insurance Verification, Appointment Scheduling, and Patient
              Engagement services. Our experienced professionals help your
              practice improve efficiency while delivering outstanding patient
              care.
            </p>
            <a href="#" class="btn-primary mt-5 self-start">Schedule a Consultation</a>
          </div>
        </article>

        <!-- Benefit cards 2x2 -->
        <div class="grid gap-6 sm:grid-cols-2 lg:col-span-2">
          <article
            *ngFor="let p of props; let i = index"
            hrReveal
            [revealDelay]="i * 80"
            class="hover-lift card flex flex-col p-6"
          >
            <div class="grid h-12 w-12 place-items-center rounded-r1 bg-primary-ultra-light text-2xl" aria-hidden="true">
              {{ p.icon }}
            </div>
            <h3 class="mt-4 font-heading text-lg font-bold text-heading">{{ p.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">{{ p.body }}</p>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class ValuePropsComponent {
readonly props: Prop[] = [
  {
    icon: '🏥',
    title: 'Front Office Excellence',
    body:
      'Comprehensive front office solutions including phone answering, appointment scheduling, reminder calls, patient check-in, and administrative support.',
  },
  {
    icon: '📋',
    title: 'Healthcare Workflow Management',
    body:
      'We handle insurance verification, referrals, prior authorizations, documentation, and patient coordination with efficiency and accuracy.',
  },
  {
    icon: '💰',
    title: 'Revenue Cycle Management',
    body:
      'Improve billing performance, accelerate reimbursements, reduce denials, and maximize revenue through our comprehensive RCM services.',
  },
  {
    icon: '🛡',
    title: 'Quality & Compliance',
    body:
      'Our experienced healthcare professionals follow proven processes to maintain quality, improve patient satisfaction, and support efficient clinical operations.',
  },
];
}
