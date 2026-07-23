import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./Pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'how-we-work',
    loadComponent: () =>
      import('./Pages/how-we-works/how-we-works.component').then(m => m.HowWeWorksComponent),
  },
{
    path: 'contact',
    loadComponent: () =>
      import('./Pages/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./sections/services.component').then(m => m.ServicesComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];