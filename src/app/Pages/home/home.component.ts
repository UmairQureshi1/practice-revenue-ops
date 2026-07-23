import { Component } from '@angular/core';
import { CommunityComponent } from "../../sections/community.component";
import { ComparisonComponent } from "../../sections/comparison.component";
import { CtaBannerComponent } from "../../sections/cta-banner.component";
import { FinalCtaComponent } from "../../sections/final-cta.component";
import { FounderComponent } from "../../sections/founder.component";
import { HeroComponent } from "../../sections/hero.component";
import { ServicesComponent } from "../../sections/services.component";
import { SpecialtiesComponent } from "../../sections/specialties.component";
import { TestimonialsComponent } from "../../sections/testimonials.component";
import { ValuePropsComponent } from "../../sections/value-props.component";
import { VideoIntroComponent } from "../../sections/video-intro.component";
import { TrustedPlatformsComponent } from '../../sections/hr-trusted-platforms/hr-trusted-platforms.component';
import { LaboratoryServicesComponent } from '../../sections/laboratory-services/laboratory-services.component';
import { HospitalSupportComponent } from '../../sections/hospital-support/hospital-support.component';

@Component({
  selector: 'hr-home',
  standalone: true,
  imports: [
    HeroComponent,
    VideoIntroComponent,
    ValuePropsComponent,
    ServicesComponent,
    SpecialtiesComponent,
    TestimonialsComponent,
    FounderComponent,
    ComparisonComponent,
    CtaBannerComponent,
    CommunityComponent,
    FinalCtaComponent,
    TrustedPlatformsComponent,
    LaboratoryServicesComponent,
    HospitalSupportComponent
  ],
  template: `
      <hr-hero />

      <hr-video-intro />

      <hr-value-props />

      <hr-trusted-platforms/>

      <hr-laboratory-services/>

      <hr-hospital-support></hr-hospital-support>

      <hr-specialties />

      <hr-testimonials />

      <hr-founder />

      <hr-cta-banner
        heading="Healthcare Staffing..."
        cta="Get Started Today">
      </hr-cta-banner>

      <hr-comparison />

      <hr-final-cta />
  `
})
export class HomeComponent {}