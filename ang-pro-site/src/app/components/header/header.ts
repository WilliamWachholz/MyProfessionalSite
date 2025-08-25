import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';   
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header', 
  imports: [RouterLink, CommonModule],
  template: `
    <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div class="container mx-auto px-4 max-w-6xl">
        <nav class="flex items-center justify-between py-4">
          <!-- Logo/Initials -->
          <div class="flex-shrink-0">
            <a 
              routerLink="/about" 
              class="flex items-center justify-center w-12 h-12 bg-slate-900 text-white text-xl font-bold rounded-lg hover:bg-slate-800 transition-colors duration-200"
            >
              WW
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a 
              routerLink="/about" 
              routerLinkActive="text-slate-900 border-b-2 border-slate-900"
              class="text-gray-600 hover:text-slate-900 pb-1 border-b-2 border-transparent transition-all duration-200 font-medium"
            >
              About
            </a>
            <a 
              routerLink="/portfolio" 
              routerLinkActive="text-slate-900 border-b-2 border-slate-900"
              class="text-gray-600 hover:text-slate-900 pb-1 border-b-2 border-transparent transition-all duration-200 font-medium"
            >
              Portfolio
            </a>
            <a 
              routerLink="/contact" 
              routerLinkActive="text-slate-900 border-b-2 border-slate-900"
              class="text-gray-600 hover:text-slate-900 pb-1 border-b-2 border-transparent transition-all duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            (click)="toggleMobileMenu()"
            class="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
          >
            <div class="w-6 h-0.5 bg-gray-600 transition-all duration-200" 
                 [ngClass]="{'rotate-45 translate-y-2': mobileMenuOpen}"></div>
            <div class="w-6 h-0.5 bg-gray-600 transition-all duration-200" 
                 [ngClass]="{'opacity-0': mobileMenuOpen}"></div>
            <div class="w-6 h-0.5 bg-gray-600 transition-all duration-200" 
                 [ngClass]="{'-rotate-45 -translate-y-2': mobileMenuOpen}"></div>
          </button>
        </nav>

        <!-- Mobile Navigation Menu -->
        <div 
          class="md:hidden transition-all duration-300 ease-in-out overflow-hidden"
          [ngClass]="mobileMenuOpen ? 'max-h-48 pb-4' : 'max-h-0'"
        >
          <div class="flex flex-col space-y-4 pt-4 border-t border-gray-200">
            <a 
              routerLink="/about" 
              routerLinkActive="text-slate-900 font-semibold"
              (click)="closeMobileMenu()"
              class="text-gray-600 hover:text-slate-900 transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a 
              routerLink="/portfolio" 
              routerLinkActive="text-slate-900 font-semibold"
              (click)="closeMobileMenu()"
              class="text-gray-600 hover:text-slate-900 transition-colors duration-200 font-medium"
            >
              Portfolio
            </a>
            <a 
              routerLink="/contact" 
              routerLinkActive="text-slate-900 font-semibold"
              (click)="closeMobileMenu()"
              class="text-gray-600 hover:text-slate-900 transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: ``
})
export class Header {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
