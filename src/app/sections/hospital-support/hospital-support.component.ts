import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

interface HospitalService {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'hr-hospital-support',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `

<section class="bg-surface py-24">

<div class="container-hr">

    <!-- Heading -->

    <div
        class="mx-auto max-w-4xl text-center"
        hrReveal>

        <span class="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

            HOSPITAL SUPPORT SERVICES

        </span>

        <h2 class="mt-6 text-3xl font-black text-heading lg:text-6xl">

            24/7 Hospital
            <span class="text-primary">
                Operational Support
            </span>

        </h2>

        <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">

            Practice Revenue Ops provides dedicated remote teams supporting hospitals
            around the clock. From Helpdesk operations to Supply Chain management,
            we help healthcare organizations maintain uninterrupted operations.

        </p>

    </div>


    <!-- Cards -->

    <div
        class="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        <div
            *ngFor="let service of services"
            hrReveal
            class="group rounded-r2 border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">

            <div
                class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl transition group-hover:bg-primary group-hover:text-white">

                {{service.icon}}

            </div>

            <h3
                class="mt-6 text-2xl font-bold text-heading">

                {{service.title}}

            </h3>

            <p
                class="mt-4 leading-8 text-muted">

                {{service.description}}

            </p>

        </div>

    </div>

</div>

</section>

`
})
export class HospitalSupportComponent {

readonly services: HospitalService[] = [

{
icon:'🎧',
title:'24/7 Helpdesk',
description:'Round-the-clock hospital helpdesk support ensuring uninterrupted operations and rapid issue resolution.'
},

{
icon:'🏥',
title:'Hospital Operations',
description:'Remote administrative support for hospitals with dedicated teams working alongside your staff.'
},

{
icon:'📦',
title:'Supply Chain',
description:'Inventory coordination, procurement support and supply chain workflow management.'
},

{
icon:'✅',
title:'PO Confirmations',
description:'Purchase order confirmation, validation and follow-up with vendors and internal departments.'
},

{
icon:'⚠️',
title:'Exception Clearing',
description:'Identify, investigate and resolve operational exceptions to maintain workflow continuity.'
},

{
icon:'🗂️',
title:'Item Building',
description:'Create and maintain inventory master records, catalog items and material databases.'
},

{
icon:'🔄',
title:'Store Transfers',
description:'Coordinate inventory transfers between hospital departments and storage locations.'
},

{
icon:'🚚',
title:'Warehouse Transfers',
description:'Manage warehouse movement requests, stock allocation and transfer documentation.'
},

{
icon:'📊',
title:'Operational Reporting',
description:'Daily operational dashboards, KPI reporting and workflow monitoring for hospital leadership.'
}

];

}