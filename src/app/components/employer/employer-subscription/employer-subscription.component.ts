import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-employer-subscription',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './employer-subscription.component.html',
  styleUrl: './employer-subscription.component.scss'
})
export class EmployerSubscriptionComponent {

}
