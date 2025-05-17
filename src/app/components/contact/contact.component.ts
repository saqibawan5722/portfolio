import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import * as emailjs from '@emailjs/browser';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

   successMessage: string = '';
  errorMessage: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      emailjs.send(
        'service_10pxmcp',       // Your service ID
        'template_dc5a86b',      // Your template ID
        {
          name: form.value.name,
          email: form.value.email,
          message: form.value.message
        },
        'CqXg9pN6UWdzsMRf3'       // Your public key
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.successMessage = '✅ Message sent successfully!';
        form.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);

      }, (error) => {
        console.log('FAILED...', error);
        this.errorMessage = '❌ Failed to send message. Please try again.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
      });
    }
  }
}
