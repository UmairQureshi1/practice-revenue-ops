import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


interface FooterLink {
  label: string;
  route: string;
}

@Component({
  selector: 'hr-site-footer',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  template: `
      <footer class="border-t border-line bg-surface2 text-muted">
      <div class="container-hr py-16">

        <div class="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">

          <!-- Company -->
          <div>
            <img
              src="/assets/img/Practice-Revenue-Ops-Logo-Horizontal.png"
              alt="Practice Revenue Ops"
              class="h-16-logo w-auto"
            />

            <p class="mt-5 max-w-sm text-sm leading-7">
              Practice Revenue Ops is an end-to-end healthcare support company
              providing Front Office Management, Revenue Cycle Management,
              Insurance Verification, Medical Scribing, Patient Scheduling,
              and Administrative Support for medical practices.
            </p>

        <!-- 
          <div class="mt-6 flex gap-3">
            <a
              *ngFor="let s of socials"
              href="#"
              class="grid h-10 w-10 place-items-center rounded-full bg-primary-ultra-light text-primary hover:bg-primary hover:text-white transition"
            >
              {{ s }}
            </a>
          </div>
        -->
          </div>

          <!-- Services -->
          <div>
            <h3 class="font-heading text-sm font-bold uppercase tracking-wider text-heading">
              Services
            </h3>

            <ul class="mt-5 space-y-3">
              <li *ngFor="let item of services">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>

          <!-- Solutions -->
          <div>
            <h3 class="font-heading text-sm font-bold uppercase tracking-wider text-heading">
              Solutions
            </h3>

            <ul class="mt-5 space-y-3">
              <li *ngFor="let item of solutions">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h3 class="font-heading text-sm font-bold uppercase tracking-wider text-heading">
              Company
            </h3>

            <ul class="mt-5 space-y-3">
              <li *ngFor="let item of company">
                <a 
                [routerLink]="item.route"
                routerLinkActive="active-nav"
                class="link-hover"
                (click)="scrollTop()"
                >{{ item.label }}</a>
              </li>
            </ul>
          </div>

        </div>

        <!-- Contact -->
        <div
          class="mt-14 grid gap-8 border-t border-line pt-8 md:grid-cols-3"
        >
          <div>
            <h4 class="font-heading text-xs font-bold uppercase text-primary">
              Office
            </h4>

          <p class="mt-2 text-sm leading-6">
            333 Washington Street<br />
            3rd Floor #3055<br />
            Jersey City, New Jersey 07302
          </p>
          </div>

          <div>
            <h4 class="font-heading text-xs font-bold uppercase text-primary">
              Email
            </h4>

            <a
              href="mailto:info@practicerevenueops.com"
              class="mt-2 block text-sm link-hover"
            >
              info<span>&#64;</span>practicerevenueops.com
            </a>
          </div>

          <div>
            <h4 class="font-heading text-xs font-bold uppercase text-primary">
              Phone
            </h4>

      <a
        href="tel:+13054284439"
        class="mt-2 block text-sm link-hover"
      >
        +1 (305) 428-4439
    </a>
          </div>
        </div>

      </div>

      <div class="border-t border-line py-6">
        <p class="container-hr text-center text-xs text-muted/70">
          © 2026 Practice Revenue Ops. All Rights Reserved.
        </p>
      </div>
    </footer>
  `,
})


export class SiteFooterComponent {

  readonly socials = ['in', 'f', 'x'];

  readonly services = [
    'Front Office Management',
    'Revenue Cycle Management',
    'Insurance Verification',
    'Medical Scribing',
    'Appointment Scheduling',
    'Patient Communication',
  ];

  readonly solutions = [
    'Phone Answering',
    'Eligibility Verification',
    'Prior Authorization',
    'Referral Management',
    'Payment Posting',
    'Reporting & Analytics',
  ];


readonly company: FooterLink[] = [
  {
    label: 'About Us',
    route: '/about',
  },
  {
    label: 'Our Services',
    route: '/services',
  },
  {
    label: 'How We Work',
    route: '/how-we-work',
  },
  {
    label: 'Contact',
    route: '/contact',
  },
  {
    label: 'Privacy Policy',
    route: '/privacy-policy',
  },
  {
    label: 'Terms & Conditions',
    route: '/terms-and-conditions',
  },
];

scrollTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

}
