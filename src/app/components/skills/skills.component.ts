import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SkillIcons } from './skill-icons';


@Component({
  selector: 'app-skills',
  imports: [MatIconModule,CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skillsData = [
    {code:'Angular',icon: SkillIcons.Angular},
    {code : 'Java', icon: SkillIcons.Java},
    {code : 'Python', icon: SkillIcons.Python},
    {code : 'Html', icon: SkillIcons.Html},
    {code : 'Css', icon: SkillIcons.Css},
    {code : 'Javascript', icon: SkillIcons.Javascript},
    {code : 'MySql', icon: SkillIcons.MySql},
    {code : 'Git', icon: SkillIcons.Git},
    {code : 'React', icon: SkillIcons.React},
    {code : 'GitHub', icon: SkillIcons.GitHub}
  ];


}
