import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

// import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

// import { RouterLink, RouterLinkActive} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    SkillsComponent,
    HeroComponent,
    MatIconModule,
    EducationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
