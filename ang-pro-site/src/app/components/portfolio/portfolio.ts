import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, RouterLink],
  template: `
     <div class="max-w-6xl mx-auto">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Portfolio
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Explore my latest projects showcasing expertise in multiple technologies.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          *ngFor="let cat of categories"
          (click)="filterProjects(cat)"
          [ngClass]="activeCategory === cat 
            ? 'bg-slate-900 text-white' 
            : 'bg-white text-gray-700 hover:bg-gray-50'"
          class="px-6 py-3 rounded-lg border border-gray-200 font-medium transition-all duration-200 shadow-sm"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          *ngFor="let project of filteredProjects" 
          class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Project Image -->
          <div class="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <div class="text-slate-400 text-center">
              <div class="w-16 h-16 bg-slate-300 rounded-lg mb-2 mx-auto flex items-center justify-center">                
                <div class="w-16 h-16 bg-slate-300 rounded-lg mb-2 mx-auto overflow-hidden">                
                  <img [src]="project.imageUrl" [alt]="project.title" class="w-full h-full object-cover">
                </div>
              </div>
              <p class="text-sm font-medium">{{ project.title }}</p>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                *ngFor="let tech of project.technologies"
                class="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3">
              <button 
                *ngIf="project.demoUrl"
                (click)="openUrl(project.demoUrl)"
                class="flex-1 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium"
              >
                Live Demo
              </button>
              <button 
                *ngIf="project.githubUrl"
                (click)="openUrl(project.githubUrl)"
                class="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div *ngIf="filteredProjects.length === 0" class="text-center py-16">
        <div class="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <p class="text-gray-500 text-lg">No projects found in this category.</p>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16 bg-slate-50 rounded-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">
          Interested in Working Together?
        </h2>
        <p class="text-gray-600 mb-6">
          I'm always open to discussing new opportunities and exciting projects.
        </p>
        <a 
          routerLink="/contact"
          class="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200"
        >
          Get In Touch
          <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    </div>
  `,
  styles: ``
})
export class Portfolio {
 categories = ['All', 'Web App', 'Framework', 'Embedded System'];
  activeCategory = 'All';

  projects: Project[] = [
    {
      id: 1,
      title: 'Lunora',
      description: 'Modern e-commerce solution built with Angular and Asp.Net MVC, using responsive design, featuring login and authentication control, shop cart, checkout and order placement.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'C#', 'Asp.Net MVC', '.NET Core', 'Postgre', 'SqlServer'],
      imageUrl: 'assets/lunora.png',
      demoUrl: 'https://lunorademo.vercel.app/',
      githubUrl: 'https://github.com/WilliamWachholz/lunora',
      category: 'Web App'
    },
    {
      id: 2,
      title: 'B1Base',
      description: 'Library to develop for SAP Business One. It saves a lot of effort since abstracts some primarly work of SAP B1 development.',
      technologies: ['C#', '.NET Framework', 'SAP B1', 'Service Layer', 'SAP HANA', 'Sql Server'],
      imageUrl: '/assets/b1base.png',      
      githubUrl: 'https://github.com/WilliamWachholz/B1Base',
      category: 'Framework'
    },
    {
      id: 3,
      title: 'Cam TimeCard',
      description: 'Complete electronic time clock control system using facial recognition, integrated with a Flask backend for data storage.',
      technologies: ['Phyton', 'OpenCV', 'Flask', 'SQLite'],
      imageUrl: '/assets/camera.png',
      githubUrl: 'https://github.com/WilliamWachholz/CameraTimeCard',
      category: 'Embedded System'
    },
    {
      id: 4,
      title: 'Professional Site',
      description: 'Explore the source code of this web site.',
      technologies: ['Angular', 'Typescript', 'Tailwind CSS', 'Node.js'],
      imageUrl: '/assets/professional.png',
      githubUrl: 'https://github.com/WilliamWachholz/MyProfessionalSite/',
      category: 'Web App'
    },
    {
      id: 5,
      title: 'SAP B1/Salesforce Integration',
      description: 'Project that I have developed showcasing how to integrate SAP B1 and SalesForce.',
      technologies: ['C#', '.NET Framework', 'REST API', 'SAP B1', 'Salesforce', 'OpenSSL'],
      imageUrl: '/assets/sapb1sf.png',
      githubUrl: 'https://github.com/WilliamWachholz/SAPB1SFIntegration.git',
      category: 'Framework'
    },    
  ];

  filteredProjects = [...this.projects];

  filterProjects(category: string) {
    this.activeCategory = category;
    if (category === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
