import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'hr-community',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
    <section class="overflow-hidden bg-surface py-16 lg:py-24">
      <div class="container-hr">
        <div class="mx-auto max-w-3xl text-center" hrReveal="down">
          <h2 class="font-heading text-3xl font-extrabold text-heading sm:text-4xl">
            The Largest Community of Healthcare Virtual Assistants
          </h2>
          <p class="mt-3 text-muted">
            Behind every Hello Rache VA is a dedicated healthcare professional committed to excellence.
          </p>
        </div>
      </div>

      <!-- Auto-scrolling image slider — contained filmstrip (Splide loop on the
           source: 5 per view, ~150px tall, no gaps / corners / shadows). -->
      <div class="container-hr">
        <div class="group relative mt-10 overflow-hidden" hrReveal="in">
          <div class="flex w-max animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
            <div
              *ngFor="let img of loop"
              class="h-[150px] w-[19vw] max-w-[273px] shrink-0"
            >
              <img
                [src]="'assets/img/' + img"
                alt="Hello Rache virtual assistant community"
                class="h-full w-full bg-primary-ultra-light object-cover"
              />
            </div>
          </div>
        </div>

        <dl class="mt-12 grid gap-8 text-center sm:grid-cols-3" hrReveal="up">
          <div *ngFor="let s of stats">
            <dt class="font-heading text-4xl font-extrabold text-primary">{{ s.value }}</dt>
            <dd class="mt-1 text-sm text-muted">{{ s.label }}</dd>
          </div>
        </dl>
      </div>
    </section>
  `,
  styles: [`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `],
})
export class CommunityComponent {
  private readonly images = [
    'Community-Pic-1-1024x676.png',
    'HVA-Working-2-1024x576.png',
    'Hello-Rache-69-1024x683.jpg',
    'HVA-Working-4-1024x576.png',
    'DAV_4755-1024x466.jpg',
  ];
  // Duplicated so the -50% marquee loops seamlessly.
  readonly loop = [...this.images, ...this.images];

  readonly stats = [
    { value: '12,000+', label: 'Successful Placements' },
    { value: '6,000+', label: 'Practices & Medical Groups Served' },
    { value: '100%', label: 'HIPAA-Compliant Assistants' },
  ];
}
