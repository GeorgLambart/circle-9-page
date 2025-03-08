import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [WelcomeComponent, AboutComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {}
