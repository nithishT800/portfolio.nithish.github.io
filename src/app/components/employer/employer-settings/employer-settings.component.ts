import { Component, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmployerSettingsNavListComponent } from '../../blocks/bottomsheets/employer-settings-nav-list/employer-settings-nav-list.component';
import { JsonPipe, NgClass } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-employer-settings',
  standalone: true,
  imports: [
    MatCardModule, MatListModule, RouterLink, RouterLinkActive, MatIconModule, MatButtonModule, 
    JsonPipe, RouterOutlet, MatChipsModule, NgClass],
  templateUrl: './employer-settings.component.html',
  styleUrl: './employer-settings.component.scss'
})
export class EmployerSettingsComponent {
    
    private _bottomSheet = inject(MatBottomSheet);
    public params:any = {};
    public setting_nav_list:any = [
        {label: 'Profile', routerLink: 'profile', value: 'profile', icon: 'account_circle'},
        {label: 'Data & Privacy', routerLink: 'data-privacy', value: 'data_privacy', icon: 'toggle_on'},
        {label: 'Security', routerLink: 'security', value: 'security', icon: 'security'},
        {label: 'Subscriptions', routerLink: 'subscriptions', value: 'subscriptions', icon: 'subscriptions'},
        {label: 'About', routerLink: 'about', value: 'about', icon:'info'},
        {label: 'Logout', routerLink: 'logout', value: 'logout', icon: 'logout'},
    ];

    constructor(private activatedRoute:ActivatedRoute, private router: Router, private data: DataService,){}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((event:any) => {
            this.params = event;
        })
    }


    showBottomNavMenu(){
        this._bottomSheet.open(EmployerSettingsNavListComponent, 
            {
                data: {nav_list: this.setting_nav_list, params: this.params}
            }
        );
    }


}
