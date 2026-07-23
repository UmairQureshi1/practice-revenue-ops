import { Component, Input } from '@angular/core';
import { RevealDirective } from '../reveal.directive';

/** Full-width purple call-to-action strip (edge-to-edge, text left, button right). */
@Component({
  selector: 'hr-cta-banner',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="bg-purple-radial">
      <div
        hrReveal="in"
        class="container-hr flex flex-col items-center justify-between gap-6 py-10 text-center lg:flex-row lg:text-left"
      >
        <div class="max-w-4xl">
          <h2 class="font-heading text-2xl font-extrabold leading-tight text-white lg:text-4xl">
            Optimize Your Practice with Dedicated Healthcare Professionals &
            Revenue Operations Support.
          </h2>

          <p class="mt-4 max-w-3xl text-base text-white/90">
            From medical scribing and front office support to insurance
            verification, medical billing, and revenue cycle management,
            Practice Revenue Ops helps healthcare providers improve efficiency,
            reduce administrative workload, and focus on delivering exceptional
            patient care.
          </p>
        </div>

        <a href="#" class="btn-white shrink-0">
          Book a Free Consultation
          <span
            class="grid h-5 w-5 place-items-center rounded-full bg-heading text-[10px] text-white"
          >
            →
          </span>
        </a>
      </div>
    </section>
  `,
})
export class CtaBannerComponent {}