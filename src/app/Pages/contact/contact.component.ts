import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'hr-contact',
  standalone: true,
  imports: [RevealDirective],
  template: `
<!-- ==========================================
CONTACT HERO
========================================== -->

<section class="relative overflow-hidden bg-surface">

  <div
    class="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-primary-light/30 blur-3xl">
  </div>

  <div class="container-hr py-16 lg:py-24">

    <div class="grid items-center gap-14 lg:grid-cols-2">

      <!-- LEFT -->

      <div hrReveal="left">

        <div
          class="inline-flex items-center rounded-full border border-primary/20 bg-primary-light/10 px-4 py-2">

          <span class="text-sm font-semibold text-primary">
            Contact Practice Revenue Ops
          </span>

        </div>

        <h1
          class="mt-6 font-heading text-5xl font-extrabold leading-tight text-heading">

          Let's Connect &
          <span class="text-primary">
            Grow Your Practice
          </span>

        </h1>

        <p
          class="mt-6 max-w-xl text-lg leading-8 text-muted">

          Whether you're interested in Front Office Management,
          Insurance Verification, Medical Scribing or Revenue Cycle
          Management, our healthcare support specialists are ready
          to help your practice operate more efficiently.

          Reach out today and discover how Practice Revenue Ops can
          become a trusted extension of your healthcare team.

        </p>

        <div class="mt-10 flex flex-wrap gap-4">

          <a
            href="tel:+13054284439"
            class="btn-primary">

            Call Us Today

          </a>

          <a
            href="mailto:info@practicerevenueops.com"
            class="btn-ghost rounded-r1 border border-line px-6 py-3">

            Email Our Team

          </a>

        </div>

      </div>

      <!-- RIGHT -->

      <div hrReveal="right">

        <img
          src="/assets/img/practice-team.png"
          class="mx-auto w-full max-w-xl"
          alt="Healthcare Support Team">

      </div>

    </div>

  </div>

</section>

<!-- ==========================================
CONTACT CARDS
========================================== -->

<section class="bg-white py-20">

  <div class="container-hr">

    <div class="text-center">

      <span
        class="text-sm font-semibold uppercase tracking-widest text-primary">

        Contact Information

      </span>

      <h2
        class="mt-4 font-heading text-4xl font-extrabold text-heading">

        We're Always Ready To Help

      </h2>

    </div>

    <div class="mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-3">

      <!-- Phone -->

      <article
        class="hover-lift rounded-r2 border border-line bg-white p-8 shadow-card">

        <div
          class="grid h-14 w-14 place-items-center rounded-r1 bg-primary-ultra-light text-3xl">

          📞

        </div>

        <h3
          class="mt-5 text-xl font-bold text-heading">

          Call Us

        </h3>

        <a
          href="tel:+13054284439"
          class="mt-4 leading-7 text-muted"
        >

          +1 (305) 428-4439

        </a>

      </article>

      <!-- Email -->

      <article
        class="hover-lift rounded-r2 border border-line bg-white p-8 shadow-card">

        <div
          class="grid h-14 w-14 place-items-center rounded-r1 bg-primary-ultra-light text-3xl">

          ✉️

        </div>

        <h3
          class="mt-5 text-xl font-bold text-heading">

          Email

        </h3>

        <p class="mt-4 leading-7 text-muted">

          info<span>&#64;</span>practicerevenueops.com

        </p>

      </article>

      <!-- Office -->

      <article
        class="hover-lift rounded-r2 border border-line bg-white p-8 shadow-card">

        <div
          class="grid h-14 w-14 place-items-center rounded-r1 bg-primary-ultra-light text-3xl">

          📍

        </div>

        <h3
          class="mt-5 text-xl font-bold text-heading">

          Office

        </h3>

      <p class="mt-4 leading-7 text-muted">
        333 Washington Street<br>
        3rd Floor #3055<br>
        Jersey City, New Jersey 07302
      </p>

      </article>


    </div>

  </div>

</section>

<!-- ==========================================
WAYS TO REACH US
========================================== -->

<section class="bg-surface py-15">

  <div class="container-hr">

    <div class="grid gap-14 lg:grid-cols-2">

      <div hrReveal="left">

        <span
          class="text-sm font-semibold uppercase tracking-widest text-primary">

          Why Contact Us

        </span>

        <h2
          class="mt-4 font-heading text-4xl font-extrabold text-heading">

          Healthcare Support You Can Count On

        </h2>

        <p
          class="mt-6 leading-8 text-muted">

          Practice Revenue Ops partners with independent healthcare
          providers to simplify daily operations and boost practice
          performance. From appointment scheduling and insurance
          verification to medical documentation and revenue cycle
          management, our experienced professionals provide reliable,
          HIPAA-compliant support tailored to your workflow.

        </p>

        <ul class="mt-8 space-y-4">

          <li>✔ Dedicated Healthcare Support Specialists</li>
          <li>✔ HIPAA Focused Processes</li>
          <li>✔ Fast Response & Personalized Assistance</li>
          <li>✔ Flexible Solutions For Every Practice</li>
          <li>✔ Reliable Front Office & RCM Services</li>

        </ul>

      </div>

      <div hrReveal="right">

        <img
          src="/assets/img/healthcare-team.png"
          class="rounded-r2 shadow-card"
          alt="Healthcare Office">

      </div>

    </div>

  </div>

</section>

<!-- ==========================================
CTA
========================================== -->

<section class="py-20">

  <div
    class="container-hr rounded-r2 bg-primary px-12 py-16 text-center text-white">

    <h2
      class="font-heading text-3xl font-extrabold text-white sm:text-4xl">

      Ready to Streamline Your Healthcare Practice?

    </h2>

    <p
      class="mx-auto mt-5 max-w-3xl text-lg opacity-90">

      Connect with Practice Revenue Ops today to learn how our Front
      Office Management, Medical Scribing, Insurance Verification,
      and Revenue Cycle Management services can help your practice
      improve efficiency, enhance patient satisfaction, and maximize
      financial performance.

    </p>

    <div
      class="mt-10 flex flex-wrap justify-center gap-5">

      <a
        href="tel:+13054284439"
        class="rounded-r1 bg-white px-8 py-4 font-semibold text-primary">

        📞 +1 (305) 428-4439

      </a>

      <a
        href="mailto:info@practicerevenueops.com"
        class="rounded-r1 border border-white px-8 py-4 font-semibold text-white">

         info<span>&#64;</span>practicerevenueops.com

      </a>

    </div>

  </div>

</section>
`
})
export class ContactComponent {

}
