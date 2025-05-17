import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'To-Do App',
      description: 'A fully-featured Angular to-do app with Firebase integration.',
      image: 'assets/projects/todo.png',
      link: 'https://angulartodoapp-a2ad9.web.app',
      disabled: false
    },
    {
      title: 'Weather App',
      description: 'Shows real-time weather using open API.',
      image: 'assets/projects/weather.png',
      link: 'https://your-live-link.com',
      disabled: true
    },
    {
      title: 'Portfolio Website',
      description: 'My own responsive portfolio website made with Angular.',
      image: 'assets/projects/portfolio.png',
      link: 'https://your-live-link.com',
      disabled: false
    }
  ];

}
