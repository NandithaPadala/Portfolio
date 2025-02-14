import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  personalData = {
    description : 'My name is Nanditha Padala. I am a full stack developer with a passion for creating and developing web applications. I have experience in front-end and back-end development, and I am always looking to learn new technologies and improve my skills. I am a team player and I am always looking to collaborate with other developers to create amazing applications.While I enjoy working with various technologies, Python is at the core of myexpertise, and I strive to leverage it to its full potential. I am eager tocollaborate on projects that challenge my abilities and help me grow professionally.If you are looking for a committed and skillful individual to contribute to your team,I’m available for opportunities that align with my interests and expertise.',
    profile: './assets/images/profile.jpg'
  }
}
