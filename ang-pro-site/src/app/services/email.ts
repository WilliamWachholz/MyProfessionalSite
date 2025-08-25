import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface EmailData {
  to: string;
  subject: string;
  body: string;
  from?: string;
}


export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  messageId?: string;
  error?: string;
}


@Injectable({
  providedIn: 'root'
})

export class Email {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendEmail(emailData: EmailData): Observable<EmailResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<EmailResponse>(`${this.apiUrl}/api/send-email`, emailData, { headers });
  }

  sendContactForm(contactData: ContactFormData): Observable<EmailResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<EmailResponse>(`${this.apiUrl}/api/contact`, contactData, { headers });
  }

  // Test server connection
  testConnection(): Observable<any> {
    return this.http.get(`${this.apiUrl}/health`);
  }
}