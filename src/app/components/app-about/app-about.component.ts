import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-app-about',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './app-about.component.html',
  styleUrl: './app-about.component.scss'
})
export class AppAboutComponent {

}
