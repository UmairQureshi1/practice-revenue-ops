import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'hr-pricing',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
    <section class="bg-surface py-16 lg:py-24">
      <div class="container-hr grid gap-12 lg:grid-cols-2 lg:items-center">
        <!-- Price card -->
        <div hrReveal="left" class="mx-auto w-full max-w-md">
          <div class="card overflow-hidden border border-line px-8 py-10 text-center">
            <p class="font-heading text-lg font-bold text-heading">Customized Pricing</p>
            <p class="mt-4 font-heading text-6xl font-extrabold text-heading">
              Custom<span class="align-middle text-base font-semibold uppercase tracking-wider text-muted">
Plans</span>
            </p>
            <p class="mt-4 text-sm text-muted">Flexible staffing • No long-term contracts • Scalable solutions</p>
            <a href="#" class="btn-primary mt-7 w-full">Request a Consultation</a>
          </div>
        </div>

        <!-- Feature list -->
        <div hrReveal="right" [revealDelay]="120">
          <h2 class="font-heading text-3xl font-extrabold text-heading sm:text-4xl">
            Flexible Healthcare Staffing
            <span class="text-primary">& Revenue Solutions</span>
          </h2>
          <ul class="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            <li
              *ngFor="let f of features"
              class="flex items-start gap-3 text-sm text-heading"
            >
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[11px] font-bold text-white">✓</span>
              <span>{{ f }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class PricingComponent {
readonly features = [
  'Dedicated Healthcare Virtual Assistants',
  'Medical Scribes & Virtual Receptionists',
  'Revenue Cycle Management Support',
  'Insurance Verification & Prior Authorization',
  'HIPAA-Compliant Professionals',
  'EMR/EHR Experienced Team Members',
  'Flexible Staffing Plans',
  'No Long-Term Contracts',
  'Scalable As Your Practice Grows',
  'Ongoing Performance Monitoring',
];
}
