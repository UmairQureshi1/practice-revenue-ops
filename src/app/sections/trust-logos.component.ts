import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'hr-trust-logos',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
    <!-- Client logos -->
    <section class="bg-surface pb-10">
      <div class="container-hr" hrReveal>
        <div class="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-90">
          <img
            *ngFor="let l of logos"
            [src]="'/assets/img/' + l.file"
            [alt]="l.alt"
            class="h-10 w-auto object-contain sm:h-12"
          />
        </div>
      </div>
    </section>

    <!-- Purple credibility strip -->
    <section class="bg-primary">
      <div
        class="container-hr flex flex-col items-center justify-between gap-4 py-5 text-center sm:flex-row sm:text-left"
      >
        <p class="font-heading text-lg font-bold text-white sm:text-xl">
          The Original Healthcare Virtual Assistant&reg; Company
        </p>
        <a href="#" class="btn-white shrink-0">Schedule a Call</a>
      </div>
    </section>
  `,
})
export class TrustLogosComponent {
  readonly logos = [
    { file: 'PRINE-Health-Logo.png', alt: 'PRINE Health' },
    { file: 'ntxmsk-logo.png', alt: 'North Texas MSK' },
    { file: 'Smart-orthopaedic-Therapy-Logo.png', alt: 'Smart Orthopaedic Therapy' },
    { file: 'c15269_8233b420f6304bf79eab440e1bccb5d5mv2.gif', alt: 'Client logo' },
    { file: 'logo_eec365e9dc0a33684a7d07fc74ce5ea9_1x.png', alt: 'Client logo' },
  ];
}
