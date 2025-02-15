import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
    educationData = [
      {
        year : '2022-2026',
        degree : 'BACHELOR OF TECHNOLOGY',
        description : 'Computer Science in GMR Institute of Technology',
      },
      {
        year : '2019-2022',
        degree : 'INTERMEDIATE',
        description : 'Chakradhar Junior College',
      },
      {
        year : '2018-2019',
        degree : 'SECONDARY SCHOOL',
        description : 'St .Josephs High School',
      }
    ];
}
