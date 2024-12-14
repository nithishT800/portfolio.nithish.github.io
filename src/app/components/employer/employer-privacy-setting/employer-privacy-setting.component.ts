import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {CdkListbox, CdkOption} from '@angular/cdk/listbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
@Component({
  selector: 'app-employer-privacy-setting',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatListModule, CdkListbox, CdkOption, MatSlideToggleModule, MatDividerModule, FormsModule],
  templateUrl: './employer-privacy-setting.component.html',
  styleUrl: './employer-privacy-setting.component.scss'
})
export class EmployerPrivacySettingComponent {
    public settings:any = {profile_is_visible: false};

    toggleProfileVisibility(){
        this.settings.profile_is_visible = !this.settings.profile_is_visible;
    }
}
