import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'hr-final-cta',
  standalone: true,
  imports: [RevealDirective],
  template: `
     <section class="bg-purple-gradient">
      <div class="container-hr grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-0">

        <!-- Content -->
        <div hrReveal="left" class="py-6 text-white lg:py-20">

          <h2 class="font-heading text-4xl font-extrabold leading-tight text-white lg:text-5xl">
            Ready to Increase Your Practice Revenue?
          </h2>

          <p class="mt-6 max-w-xl text-lg leading-8 text-white/90">
            Let Practice Revenue Ops handle your front office operations,
            medical billing, insurance verification, scheduling, and
            administrative workflows—so your team can focus on delivering
            exceptional patient care.
          </p>

          <div class="mt-10">
            <a href="/contact" class="btn-white">
              Schedule a Free Consultation
            </a>
          </div>

        </div>

        <!-- Image -->
        <div hrReveal="right" [revealDelay]="150" class="self-end">
          <img
             src="/assets/img/CTA-Healthcare-Virtual-Asssitant-Image-With-Practice-Resized.png"
            alt="Practice Revenue Ops Team"
            class="mx-auto w-full max-w-2xl"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  `,
})

export class FinalCtaComponent {}
