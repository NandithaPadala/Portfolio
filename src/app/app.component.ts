import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    SkillsComponent,
    HeroComponent,
    MatIconModule,
    EducationComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';

  ngOnInit() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')!.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

}
