import { Component } from '@angular/core';
import { ContactFormData, Email, EmailData } from '../../services/email';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="max-w-4xl mx-auto">
      <!-- Add this at the top of your template, right after the opening div -->
      <div *ngIf="statusMessage" 
          [class]="'fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-6 ' + 
                    (messageClass === 'success' ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200')"
          class="p-4 rounded-lg text-center font-medium transition-all duration-200 shadow-lg border">
        <div class="flex items-center justify-between">
          <span class="flex-1">{{ statusMessage }}</span>
          <button (click)="statusMessage = ''" class="ml-4 text-current hover:opacity-70">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let's Work Together
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          I'm always interested in new opportunities and projects.
          Wheter you're a company looking to hire or a 
          fellow developer wanting to colaborate, get in touch and 
          let's create something amazing together.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Send Message</h2>
          
          <form class="space-y-6" [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input 
                type="text" 
                id="name" 
                formControlName="name"
                name="name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors duration-200"
                placeholder="Your full name"
              >
               
              
            </div>

            <div class="form-group">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input 
                type="email" 
                id="email" 
                formControlName="email"
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors duration-200"
                placeholder="your.email@example.com"
              > 
            </div>

            <div class="form-group">
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input 
                type="text" 
                id="subject" 
                formControlName="subject"
                name="subject"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors duration-200"
                placeholder="Project discussion"
              >
            </div>

            <div class="form-group">
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea 
                id="message" 
                formControlName="message"
                name="message" 
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors duration-200 resize-none"
                placeholder="Tell me about your project or what you'd like to discuss..."
              ></textarea>
            </div>

            <button class="w-full bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
              type="submit"
              [disabled]="contactForm.invalid || isLoading">           
              <span> {{ isLoading ? 'Sending...' : 'Send Message' }}</span>
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </form> 
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <!-- Contact Details -->
          <div class="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-6 h-6 text-slate-600 mt-1">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Email</h3>
                  <p class="text-gray-600">william.wachholz@gmail.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 w-6 h-6 text-slate-600 mt-1">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Location</h3>
                  <p class="text-gray-600">Blumenau, SC</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Follow Me</h2>
            
            <div class="flex space-x-4">              
              <a 
                href="https://www.linkedin.com/in/williamwachholz/" 
                class="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-200"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/WilliamWachholz" 
                class="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-200"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>              
            </div>
          </div>

          <!-- Availability -->
          <div class="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <div class="flex items-center mb-4">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <h3 class="text-lg font-medium text-gray-900">Available for Projects</h3>
            </div>
            <p class="text-gray-600 text-sm">
              I'm currently accepting new projects and collaborations. 
              Response time is typically within 24 hours.
            </p>
          </div>
        </div>
      </div>

      <!-- FAQ Section 
      <div class="mt-16 bg-white rounded-lg shadow-sm p-8 border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">
              What's your typical project timeline?
            </h3>
            <p class="text-gray-600">
              Project timelines vary based on scope and complexity. Small projects typically take 2-4 weeks, 
              while larger applications can take 2-6 months. I provide detailed timelines during our initial consultation.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">
              Do you work with remote teams?
            </h3>
            <p class="text-gray-600">
              Absolutely! I have extensive experience working with distributed teams and use modern 
              collaboration tools to ensure seamless communication and project delivery.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">
              What technologies do you specialize in?
            </h3>
            <p class="text-gray-600">
              I specialize in Angular, React, Node.js, and TypeScript. I'm also experienced with 
              cloud platforms, databases, and modern development practices.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">
              Do you provide ongoing support?
            </h3>
            <p class="text-gray-600">
              Yes, I offer maintenance and support packages to ensure your application continues 
              to perform optimally after launch. This includes updates, bug fixes, and feature enhancements.
            </p>
          </div>
        </div>
      </div>
      -->
    </div>
  `,
  styles: ``
})
export class Contact {
contactForm: FormGroup;
  isLoading = false;
  statusMessage = '';
  messageClass = '';

  constructor(
    private fb: FormBuilder,
    private emailService: Email
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.statusMessage = '';
      
      const contactData: ContactFormData = this.contactForm.value;

      this.emailService.sendContactForm(contactData).subscribe({
        next: (response: { success: any; message: string; }) => {
          if (response.success) {
            this.statusMessage = 'Message sent successfully! We\'ll get back to you soon.';
            this.messageClass = 'success';
            this.contactForm.reset();
          } else {
            this.statusMessage = response.message || 'Failed to send message.';
            this.messageClass = 'error-message';
          }
          this.isLoading = false;
        },
        error: (error: { error: { message: string; }; }) => {
          console.error('Email error:', error);
          this.statusMessage = error.error?.message || 'Failed to send message. Please try again.';
          this.messageClass = 'error-message';
          this.isLoading = false;
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
