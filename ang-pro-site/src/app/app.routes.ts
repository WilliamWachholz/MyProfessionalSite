import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './components/about/about'; 
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { 
    path: 'about', 
    component: About,
    data: { title: 'About - William Williams' }
  },
  { 
    path: 'portfolio', 
    component: Portfolio,
    data: { title: 'Portfolio - William Williams' }
  },
  { 
    path: 'contact', 
    component: Contact,
    data: { title: 'Contact - William Williams' }
  },
  { path: '**', redirectTo: '/about' }
];

