import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../reveal.directive';

interface PlatformCategory {
  title: string;
  icon: string;
  description: string;
  platforms: string[];
}
interface Platform {
  name: string;
  logo?: string;
}

interface Category {
  icon: string;
  title: string;
  description: string;
  platforms: Platform[];
}

@Component({
  selector: 'hr-trusted-platforms',
  standalone: true,
  imports: [NgFor, RouterLink, RevealDirective, NgClass ],
  templateUrl: './hr-trusted-platforms.component.html',
  styleUrls: ['./hr-trusted-platforms.component.css']
})


export class TrustedPlatformsComponent {

readonly categories: Category[] = [

{
    icon:'💻',
    title:'EMR / EHR / RCM',
    description:'Electronic Medical Records, Practice Management and Revenue Cycle Management platforms.',
    platforms: [
        {
            name: 'Telcor',
            logo: '/assets/img/logos/Telcor.png'
        },
        {
            name: 'Epic',
            logo: '/assets/img/logos/epic.png'
        },
        {
            name: 'eCW',
            logo: '/assets/img/logos/ecw.png'
        },
        {
            name: 'Practice Fusion',
            logo: '/assets/img/logos/practice-fusion.png'
        }
        ]
},

{
    icon:'🧪',
    title:'Laboratory Information Systems',
    description:'Laboratory Information Systems supporting diagnostics, pathology, specimen tracking and workflow management.',
    platforms:[
        {
            name: 'LabDAQ',
            logo: undefined
        },
        {
            name: 'Labgen',
            logo: undefined
        },
        {
            name: 'Comtron',
            logo: undefined
        },
        {
            name: 'ShadowBox',
            logo: undefined
        },
        {
            name: 'LabNexus',
            logo: undefined
        }
    ]
},

{
    icon:'📦',
    title:'Enterprise Resource Planning',
    description:'Enterprise ERP solutions for inventory, procurement, warehouse, supply chain and operational management.',
    platforms:[
        {
            name: 'Premier',
            logo: undefined
        },
        {
            name: 'Meditech',
            logo: undefined
        },
        {
            name: 'MedLive',
            logo: undefined
        },
        {
            name: 'HPG',
            logo: undefined
        }
    ]
}

];

}