import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'hr-founder',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="bg-white py-16 lg:py-24">
      <div class="container-hr grid gap-12 lg:grid-cols-2 lg:items-center">
        <!-- Portrait -->
        <div hrReveal="left" class="order-2 lg:order-1">
          <div class="relative mx-auto max-w-md">
            <div
              class="pointer-events-none absolute inset-0 scale-95 rounded-full bg-primary-ultra-light"
              aria-hidden="true"
            ></div>
            <img
              src="/assets/img/Mark.png"
              alt="Dr. Mark Carnett, D.O. — Founder"
              class="relative mx-auto w-full max-w-sm rounded-full"
            />
          </div>
        </div>

        <!-- Copy -->
        <div hrReveal="right" [revealDelay]="120" class="order-1 lg:order-2">
          <h2 class="font-heading text-3xl font-extrabold text-heading sm:text-4xl">
  Healthcare Support That
  <span class="text-primary">Puts Patients First.</span>
</h2>
          <p class="mt-5 text-base leading-relaxed text-muted">
Practice Revenue Ops partners with healthcare organizations to
streamline daily operations, strengthen revenue cycle performance,
and improve the patient experience. Our experienced healthcare
professionals provide comprehensive support across front office
management, medical documentation, insurance verification,
appointment scheduling, and administrative workflows.
</p>

<p class="mt-4 text-base leading-relaxed text-muted">
By becoming an extension of your healthcare team, we help reduce
administrative burdens, improve operational efficiency, and allow
providers to focus on delivering exceptional patient care while
building a healthier, more profitable practice.
</p>
          <a href="#" class="btn-primary mt-7">Learn More About Us </a>
        </div>
      </div>
    </section>
  `,
})
export class FounderComponent {}
