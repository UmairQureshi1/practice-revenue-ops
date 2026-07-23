import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'hr-comparison',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
    <section class="bg-white py-16 lg:py-24">
      <div class="container-hr">
        <div class="mx-auto max-w-3xl text-center" hrReveal>
          <h2 class="font-heading text-3xl font-extrabold text-heading sm:text-4xl">
            Why Healthcare Practices Choose <span class="text-primary">Practice Revenue Ops</span>
          </h2>
          <p class="mt-3 text-muted">
            More than virtual assistants—we provide trained healthcare professionals,
streamlined workflows, and revenue-focused operational support that helps
medical practices grow efficiently.
          </p>
        </div>

        <div class="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <!-- Hello Rache -->
          <div hrReveal="left" class="overflow-hidden rounded-r2 border border-line bg-white shadow-card">
            <div class="bg-primary px-6 py-4">
              <h3 class="font-heading text-lg font-bold text-white">Practice Revenue Ops</h3>
            </div>
            <ul class="space-y-4 p-6">
              <li *ngFor="let item of ours" class="flex items-start gap-3">
                <span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green-100 text-sm text-green-600">✓</span>
                <span class="text-sm text-heading">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Other Agencies -->
          <div hrReveal="right" [revealDelay]="120" class="overflow-hidden rounded-r2 border border-line bg-white shadow-card">
            <div class="bg-heading px-6 py-4">
              <h3 class="font-heading text-lg font-bold text-white">Traditional Staffing Solutions</h3>
            </div>
            <ul class="space-y-4 p-6">
              <li *ngFor="let item of others" class="flex items-start gap-3">
                <span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red-100 text-sm text-red-500">✕</span>
                <span class="text-sm text-muted">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ComparisonComponent {
readonly ours = [
  'Dedicated Healthcare Virtual Assistants',
  'Medical Scribes, Receptionists & Revenue Specialists',
  'HIPAA-Compliant & EMR/EHR Experienced Staff',
  'Revenue Cycle Management & Insurance Verification',
  'Flexible Staffing Without Long-Term Contracts',
  'Customized Workflow Integration for Your Practice',
];

readonly others = [
  'General virtual assistants with limited healthcare knowledge',
  'Minimal experience with EMR/EHR systems',
  'Higher staffing costs and lengthy hiring processes',
  'Limited support for billing and revenue cycle operations',
  'Inconsistent workflows and onboarding delays',
  'Less flexibility as your practice grows',
];
}
