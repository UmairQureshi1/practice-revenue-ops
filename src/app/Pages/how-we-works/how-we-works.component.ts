import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'hr-how-we-works',
  standalone: true,
  imports: [RevealDirective],
  template: `

<!-- ===========================
WHAT WE DO
============================ -->

<section class="bg-white py-20">

  <div class="container-hr" hrReveal="left">

    <div class="mx-auto max-w-3xl text-center">

      <span class="text-sm font-semibold uppercase tracking-widest text-primary">
        What We Do
      </span>

      <h2 class="mt-4 font-heading text-4xl font-extrabold text-heading">

        Comprehensive Healthcare
        <span class="text-primary">Front Office Solutions</span>

      </h2>

      <p class="mt-6 text-lg leading-8 text-muted">

        Practice Revenue Ops provides end-to-end virtual healthcare support that
        helps independent practices reduce administrative workload, improve
        patient experience, and maximize revenue. Our dedicated specialists
        seamlessly integrate with your existing team and workflows, delivering
        reliable operational support every day.

      </p>

    </div>


   <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

  <!-- Card -->
  <article
    hrReveal
    class="hover-lift rounded-r2 border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

    <div
      class="grid h-14 w-14 place-items-center rounded-r1 bg-primary-ultra-light text-3xl">
      📞
    </div>

    <h3 class="mt-5 font-heading text-2xl font-bold text-heading">
      Patient Communication
    </h3>

    <p class="mt-3 text-base leading-8 text-muted">
      Professional phone answering, appointment reminders,
      patient inquiries, follow-up calls and exceptional patient
      communication services.
    </p>

  </article>

  <!-- Card -->
  <article
    hrReveal
    class="hover-lift rounded-r2 border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

    <div
      class="grid h-14 w-14 place-items-center rounded-r1 bg-primary-ultra-light text-3xl">
      📅
    </div>

    <h3 class="mt-5 font-heading text-2xl font-bold text-heading">
      Appointment Scheduling
    </h3>

    <p class="mt-3 text-base leading-8 text-muted">
      Schedule, reschedule and coordinate appointments while
      maximizing physician availability and reducing no-shows.
    </p>

  </article>

  <!-- Card -->
  <article
    hrReveal
    class="hover-lift rounded-r2 border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

    <div
      class="grid h-14 w-14 place-items-center rounded-r1 bg-primary-ultra-light text-3xl">
      🛡️
    </div>

    <h3 class="mt-5 font-heading text-2xl font-bold text-heading">
      Insurance Verification
    </h3>

    <p class="mt-3 text-base leading-8 text-muted">
      Verify eligibility, benefits, referrals and prior
      authorizations before every patient visit.
    </p>

  </article>

  <!-- Card -->
  <article
    hrReveal
    class="hover-lift rounded-r2 border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

    <div
      class="grid h-14 w-14 place-items-center rounded-r1 bg-primary-ultra-light text-3xl">
      📝
    </div>

    <h3 class="mt-5 font-heading text-2xl font-bold text-heading">
      Medical Scribing
    </h3>

    <p class="mt-3 text-base leading-8 text-muted">
      Real-time documentation that enables physicians to focus
      completely on patient care instead of paperwork.
    </p>

  </article>

  <!-- Card -->
  <article
    hrReveal
    class="hover-lift rounded-r2 border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

    <div
      class="grid h-14 w-14 place-items-center rounded-r1 bg-primary-ultra-light text-3xl">
      💳
    </div>

    <h3 class="mt-5 font-heading text-2xl font-bold text-heading">
      Revenue Cycle Management
    </h3>

    <p class="mt-3 text-base leading-8 text-muted">
      Improve collections through payment posting, denial
      management, AR follow-up and financial reporting.
    </p>

  </article>

  <!-- Card -->
  <article
    hrReveal
    class="hover-lift rounded-r2 border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

    <div
      class="grid h-14 w-14 place-items-center rounded-r1 bg-primary-ultra-light text-3xl">
      📊
    </div>

    <h3 class="mt-5 font-heading text-2xl font-bold text-heading">
      Performance Reporting
    </h3>

    <p class="mt-3 text-base leading-8 text-muted">
      Daily, weekly and monthly operational reports with KPIs
      that provide complete visibility into practice performance.
    </p>

  </article>

</div>

  </div>

</section>

<section class="relative overflow-hidden bg-surface">

  <!-- Background -->
  <div
    class="pointer-events-none absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-primary-light/20 blur-3xl"
    aria-hidden="true">
  </div>

  <div class="container-hr relative grid gap-12 py-14 lg:grid-cols-2 lg:items-center lg:py-20">

    <!-- Left -->
    <div hrReveal="left">

      <div class="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-primary-light/10 px-4 py-2">
        <span class="text-sm font-semibold text-primary">
          Our Proven Workflow
        </span>
      </div>

      <h1 class="font-heading text-4xl font-extrabold leading-tight text-heading sm:text-5xl">

        How

        <span class="text-primary">
          Practice Revenue Ops
        </span>

        Works

      </h1>

      <p class="mt-5 text-xl font-semibold text-heading">

        Seamless Front Office &
        Revenue Cycle Support
        Designed Around Your Practice

      </p>

      <p class="mt-5 max-w-xl text-base leading-8 text-muted">

        Practice Revenue Ops integrates directly with your healthcare
        practice to streamline scheduling, patient communication,
        insurance verification, medical scribing and revenue cycle
        management.

        Our experienced healthcare professionals become an extension of
        your team, allowing providers to spend more time caring for
        patients while we handle the operational workload.

      </p>

      <div class="mt-8 flex flex-wrap gap-4">

        <a class="btn-primary">

          Schedule Consultation

        </a>

        <a class="btn-ghost rounded-r1 border border-line px-6 py-3">

          Explore Services

        </a>

      </div>

      <!-- Stats -->

      <dl class="mt-10 grid grid-cols-3 gap-8 border-t border-line pt-8">

        <div>

          <dt class="font-heading text-3xl font-bold text-primary">
            24/7
          </dt>

          <dd class="mt-1 text-sm text-muted">
            Healthcare Support
          </dd>

        </div>

        <div>

          <dt class="font-heading text-3xl font-bold text-primary">
            100%
          </dt>

          <dd class="mt-1 text-sm text-muted">
            HIPAA Focused
          </dd>

        </div>

        <div>

          <dt class="font-heading text-3xl font-bold text-primary">
            15+
          </dt>

          <dd class="mt-1 text-sm text-muted">
            Front Office Services
          </dd>

        </div>

      </dl>

    </div>

    <!-- Right Image -->

    <div hrReveal="right">

      <div class="relative mx-auto max-w-xl">

        <div
          class="absolute inset-0 scale-90 rounded-full bg-primary-light/30 blur-3xl">
        </div>

        <img
          src="/assets/img/how-we-works.png"
          alt="Practice Revenue Ops Workflow"
          class="relative z-10 w-full object-contain">

      </div>

    </div>

  </div>

</section>
`
})
export class HowWeWorksComponent {

}
