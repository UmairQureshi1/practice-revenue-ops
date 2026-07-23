import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';


@Component({
  selector: 'hr-about-hero',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
<section class="relative overflow-hidden bg-surface">

  <!-- Background Blur -->
  <div
    class="pointer-events-none absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-primary-light/30 blur-3xl"
    aria-hidden="true">
  </div>

  <div
    class="pointer-events-none absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-primary-ultra-light blur-3xl"
    aria-hidden="true">
  </div>

  <div class="container-hr relative py-14 lg:py-20">

    <div class="grid items-center gap-14 lg:grid-cols-2">

      <!-- LEFT -->
      <div hrReveal="left">

        <div
          class="inline-flex items-center gap-3 rounded-full bg-primary-ultra-light px-4 py-2">

          <svg
            class="h-5 w-5 text-primary"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24">

            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"/>

          </svg>

          <span class="text-sm font-semibold text-primary">
            About Practice Revenue Ops
          </span>

        </div>

        <h1
          class="mt-7 font-heading text-5xl font-extrabold leading-tight text-heading lg:text-6xl">

          Helping Medical Practices

          <span class="block text-primary">

            Work Smarter Every Day

          </span>

        </h1>

        <p
          class="mt-6 max-w-xl text-lg leading-8 text-muted">

          Practice Revenue Ops was founded to simplify healthcare operations
          through reliable Front Office Support, Medical Scribing,
          Insurance Verification, Prior Authorization, and Revenue Cycle
          Management.

          We become an extension of your healthcare team so providers can
          spend more time delivering exceptional patient care.

        </p>

        <div class="mt-8 flex flex-wrap gap-4">

          <a
            href="/services"
            class="btn-primary">

            Explore Our Services

          </a>

          <a
            href="tel:+13054284439"
            class="btn-ghost rounded-r1 border border-line px-6 py-3">

            Contact Us

          </a>

        </div>

        <!-- Stats -->

        <div class="mt-12 grid grid-cols-3 gap-8">

          <div
            *ngFor="let stat of stats"
            class="rounded-r2 border border-line bg-white p-5 text-center shadow-card">

            <h3
              class="font-heading text-3xl font-extrabold text-primary">

              {{stat.value}}

            </h3>

            <p
              class="mt-2 text-sm text-muted">

              {{stat.label}}

            </p>

          </div>

        </div>

      </div>

      <!-- RIGHT -->

      <div
        hrReveal="right"
        class="relative">

        <div
          class="absolute right-0 top-8 h-52 w-52 rounded-full bg-primary-light/30 blur-3xl">
        </div>

        <img
          src="/assets/img/Front-office-solution.png"
          alt="Healthcare Support Team"
          class="relative z-10 mx-auto w-full max-w-xl">

        <!-- Floating Card -->

        <div
          class="absolute left-0 top-10 rounded-r2 bg-primary p-6 text-white shadow-2xl">

          <div
            class="text-4xl font-extrabold">

            15+

          </div>

          <div
            class="mt-2 text-sm leading-6">

            Healthcare Support
            <br>

            Services

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
`
})
export class AboutComponent {

  stats = [

    {
      value:'15+',
      label:'Healthcare Services'
    },

    {
      value:'24/7',
      label:'Operational Support'
    },

    {
      value:'100%',
      label:'Quality Assurance'
    }

  ];

}