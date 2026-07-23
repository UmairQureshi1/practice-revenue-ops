import { Component } from '@angular/core';

import { SiteHeaderComponent } from './sections/site-header.component';
import { HeroComponent } from './sections/hero.component';
import { SiteFooterComponent } from './sections/site-footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'hr-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SiteHeaderComponent,
    HeroComponent,
    SiteFooterComponent,
  ],
  template: `
    <hr-site-header />
    
    <main>
     <router-outlet></router-outlet>
    </main>

    <hr-site-footer />
  `,
})
export class AppComponent {}
