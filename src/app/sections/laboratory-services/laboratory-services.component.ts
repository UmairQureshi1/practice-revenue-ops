import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../reveal.directive';

interface LabService {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'hr-laboratory-services',
  standalone: true,
  imports: [NgFor, RouterLink, RevealDirective],
  template: `

<section class="bg-surface py-24">

    <div class="container-hr">

        <!-- Heading -->

        <div
            class="mx-auto max-w-4xl text-center"
            hrReveal>

            <span
                class="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

                LABORATORY SERVICES

            </span>

            <h2
                class="mt-5 text-4xl font-black text-heading lg:text-5xl">

                Virtual Laboratory
                <span class="text-primary">

                    Support Services

                </span>

            </h2>

            <p
                class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">

                Practice Revenue Ops provides trained laboratory support
                professionals that seamlessly integrate into your existing
                workflow, helping laboratories increase productivity,
                reduce turnaround times and improve patient satisfaction.

            </p>

        </div>

        <!-- Cards -->

        <div
            class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div
                *ngFor="let service of services"
                hrReveal
                class="rounded-r2 border border-line bg-white p-8 shadow-card transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">

                <div
                    class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">

                    <span class="text-3xl">
                        {{service.icon}}
                    </span>

                </div>

                <h3
                    class="text-2xl font-bold text-heading">

                    {{service.title}}

                </h3>

                <p
                    class="mt-4 leading-7 text-muted">

                    {{service.description}}

                </p>

            </div>

        </div>

        <!-- Bottom CTA -->

        <div
            class="mt-20 rounded-r2 bg-primary px-12 py-14 text-center text-white"
            hrReveal>

            <h3
                class="text-3xl font-bold text-white lg:text-4xl">

                Laboratory Operations Built Around Your Workflow

            </h3>

            <p
                class="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">

                Whether you operate a diagnostic laboratory,
                pathology practice or multi-location testing facility,
                our experienced laboratory professionals become an
                extension of your team while maintaining HIPAA compliance
                and operational excellence.

            </p>

            <div
                class="mt-10 flex flex-wrap justify-center gap-4">

                <a
                    routerLink="/services"
                    class="rounded-full bg-white px-8 py-4 font-semibold text-primary transition hover:scale-105">

                    Explore Laboratory Services

                </a>

                <a
                    routerLink="/contact"
                    class="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-primary">

                    Schedule a Consultation

                </a>

            </div>

        </div>

    </div>

</section>

`
})
export class LaboratoryServicesComponent {

readonly services: LabService[] = [

{
icon:'🧪',
title:'Laboratory Order Entry',
description:'Accurate laboratory order processing, patient registration and physician order management.'
},

{
icon:'📋',
title:'Patient Scheduling',
description:'Coordinate appointments, laboratory testing schedules and patient communications.'
},

{
icon:'🩺',
title:'Insurance Verification',
description:'Verify insurance eligibility, benefits and authorizations before laboratory services.'
},

{
icon:'🧬',
title:'Specimen Tracking',
description:'Monitor specimen workflow, documentation and status updates from collection to reporting.'
},

{
icon:'📄',
title:'Laboratory Documentation',
description:'Maintain laboratory documentation, reports, medical records and compliance requirements.'
},

{
icon:'💳',
title:'Laboratory Billing',
description:'Support billing workflows, claim preparation, payment posting and revenue cycle activities.'
},

{
icon:'☎️',
title:'Patient Support',
description:'Handle incoming patient inquiries, appointment coordination and laboratory customer service.'
},

{
icon:'📈',
title:'Reporting & Analytics',
description:'Generate laboratory reports, operational dashboards and productivity tracking.'
},

{
icon:'🔒',
title:'HIPAA Compliance',
description:'Secure healthcare data management following HIPAA standards and laboratory regulations.'
}

];

}