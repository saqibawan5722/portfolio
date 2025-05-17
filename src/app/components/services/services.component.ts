import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services = [
    {
      title: 'Angular Development',
      icon: 'assets/angular-icon.png',
      description: 'Building modern, scalable SPA apps using Angular.'
    },
    {
      title: 'Responsive Web Design',
      icon: 'assets/responsive-icon.png',
      description: 'Creating designs that work on all devices.'
    },
    {
      title: 'UI/UX Improvement',
      icon: 'assets/uiux-icon.png',
      description: 'Enhancing user experience with clean interfaces.'
    }
  ];

}
