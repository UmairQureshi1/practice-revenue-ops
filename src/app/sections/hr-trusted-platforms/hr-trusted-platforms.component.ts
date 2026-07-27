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
            logo: '/assets/img/logos/labdaq.png'
        },
        {
            name: 'Labgen',
            logo: '/assets/img/logos/labgen.png'
        },
        {
            name: 'Comtron',
            logo: '/assets/img/logos/comtron.png'
        },
        {
            name: 'ShadowBox',
            logo: '/assets/img/logos/shadowbox.png'
        },
        {
            name: 'LabNexus',
            logo: '/assets/img/logos/labnexus.png'
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
            logo: '/assets/img/logos/Premier.png'
        },
        {
            name: 'Meditech',
            logo: '/assets/img/logos/meditech.svg'
        },
        {
            name: 'MedLive',
            logo: '/assets/img/logos/medlive.png'
        },
        {
            name: 'HPG',
            logo: '/assets/img/logos/hpg.png'
        }
    ]
}

];

}