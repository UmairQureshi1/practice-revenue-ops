import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'hr-video-intro',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="bg-white py-16 lg:py-20">
      <div class="container-hr grid gap-10 lg:grid-cols-2 lg:items-center">
        <!-- Video thumbnail -->
        <div hrReveal="left" class="relative">
          <div class="relative overflow-hidden rounded-r2 shadow-card">
            <img
              src="/assets/img/HVA-Plain-Landing-Page-Image.png"
              alt="Healthcare virtual assistant"
              class="aspect-video w-full bg-surface object-cover"
            />
            <button
              type="button"
              class="absolute inset-0 grid place-items-center transition hover:bg-black/10"
              aria-label="Play video"
            >
              <span
                class="grid h-16 w-16 place-items-center rounded-full bg-primary text-white shadow-card transition-transform hover:scale-110"
              >
                <svg class="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>
        </div>

    <!-- Content -->
        <div hrReveal="right" [revealDelay]="120">

          <span
            class="inline-flex rounded-full bg-primary-light px-4 py-2 text-sm font-semibold text-primary">
            Healthcare Operations Excellence
          </span>

          <h2 class="mt-5 font-heading text-3xl font-extrabold leading-tight text-heading sm:text-4xl">

            Transform Your Medical Practice with

            <span class="text-primary">
              Practice Revenue Ops
            </span>

          </h2>

          <p class="mt-5 text-base leading-8 text-muted">

            Practice Revenue Ops provides comprehensive healthcare support
            solutions that help medical practices improve efficiency,
            reduce administrative workload, and strengthen financial performance.
            Our experienced team delivers Front Office Management,
            Medical Scribing, Insurance Verification, Appointment Scheduling,
            Prior Authorization, and Revenue Cycle Management services
            tailored to your practice.

          </p>

          <div class="mt-8 grid grid-cols-2 gap-4 text-sm font-medium">

            <div>✔ Front Office Solutions</div>

            <div>✔ Medical Scribing</div>

            <div>✔ Appointment Scheduling</div>

            <div>✔ Insurance Verification</div>

            <div>✔ Prior Authorization</div>

            <div>✔ Revenue Cycle Management</div>

          </div>

          <div class="mt-8 flex gap-4">

            <a href="#" class="btn-primary">
              Explore Our Services
            </a>

            <a href="tel:+13054284439" class="btn-ghost">
              Contact Us
            </a>

          </div>
          </div>
      </div>
    </section>
  `,
})
export class VideoIntroComponent {}
