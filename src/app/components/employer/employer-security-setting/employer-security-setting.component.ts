import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-employer-security-setting',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatListModule, MatButtonModule],
  templateUrl: './employer-security-setting.component.html',
  styleUrl: './employer-security-setting.component.scss'
})
export class EmployerSecuritySettingComponent {

    can_reset_password:boolean = false;

    toggleResetPassword(){
        this.can_reset_password = !this.can_reset_password
    }
}
