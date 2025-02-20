import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with Angular.',
      image: 'assets/images/portfolio.webp',
      link: 'https://github.com/NandithaPadala/Social-Media-App'
    },
    {
      title: 'Social Media App',
      description: 'A full-stack e-commerce application using Django.',
      image: 'assets/images/app.webp',
      link: 'https://github.com/NandithaPadala/spring-boot-project'
    },
    {
      title: 'Caeser Cipher',
      description: 'A simple Ceaser Cipher algorithm using Spring Boot.',
      image: 'assets/images/algo.webp',
      link: 'https://github.com/NandithaPadala/Caeser-Cipher-Algo'
    }
  ];




}
