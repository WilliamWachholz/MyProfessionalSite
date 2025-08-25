import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
     <div class="max-w-4xl mx-auto">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <div class="w-32 h-32 bg-slate-900 text-white text-4xl font-bold rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          WW
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          William Wachholz
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed">
          Software Engineer & Full Stack Developer
        </p>
      </div>

      <!-- About Content -->
      <div class="grid md:grid-cols-2 gap-12 mb-16">
        <div class="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">About Me</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Professional with over 15 years of experience delivering
            innovative business solutions. 
            I bring deep expertise in business process optimization and automation,
            having worked extensively with leading enterprise platforms 
            including SAP and Salesforce, while specializing in cutting-edge web technologies.
          </p>
          <p class="text-gray-600 leading-relaxed">
            My approach seamlessly integrates technical proficiency with strategic 
            problem-solving to create applications that exceed functional requirements 
            and deliver outstanding user experiences.
          </p>
        </div>

         <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-3">
          <!-- Frontend Block -->
          <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-slate-900 flex items-center mb-4">
              <svg class="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              Frontend
            </h3>
            <div class="text-gray-600 space-y-2">
              <p>Angular</p>
              <p>ASP.NET</p>
              <p>Kotlin</p>
              <p>UI5, Fiori</p>
              <p>Bootstrap, Tailwind</p>
              <p>Responsive Design, PWA</p>              
            </div>
          </div>

          <!-- Backend Block -->
          <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-slate-900 flex items-center mb-4">
              <svg class="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/>
              </svg>
              Backend
            </h3>
            <div class="text-gray-600 space-y-2">
              <p>C#</p>  
              <p>.NET Core</p>  
              <p>Python</p>  
              <p>Node.js, Express.js</p>                            
              <p>REST API, GraphQL</p>
              <p>Microservices Architecture</p>
            </div>
          </div>

          <!-- Cloud Block -->
          <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-slate-900 flex items-center mb-4">
              <svg class="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
              </svg>
              Cloud
            </h3>
            <div class="text-gray-600 space-y-2">
              <p>AWS, Azure, Google Cloud</p>
              <p>CI/CD Pipelines</p>
              <p>Cloud Architecture</p>
            </div>
          </div>

          <!-- Tools Block -->
          <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-slate-900 flex items-center mb-4">
              <svg class="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Tools
            </h3>
            <div class="text-gray-600 space-y-2">
              <p>Git, GitHub, GitLab</p>
              <p>Postman, Insomnia</p>
              <p>NPM</p>
            </div>
          </div>

          <!-- Software Block -->
          <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-slate-900 flex items-center mb-4">
              <svg class="w-6 h-6 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Software
            </h3>
            <div class="text-gray-600 space-y-2">
              <p>SAP B1</p>
              <p>SalesForce</p>
              <p>Power BI</p>
              <p>Jira, Trello, Miro</p>         
            </div>
          </div>

          <!-- Databases Block -->
          <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-slate-900 flex items-center mb-4">
              <svg class="w-6 h-6 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
              </svg>
              Databases
            </h3>
            <div class="text-gray-600 space-y-2">
              <p>SAP HANA</p>
              <p>SQL Server</p>
              <p>PostgreSQL</p>                                          
              <p>MySQL</p>                                          
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class About {

}
