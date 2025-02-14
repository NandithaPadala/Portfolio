import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';



export const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'about', component: AboutComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'experience', component: FooterComponent}
];
