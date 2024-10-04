import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-employer-layout',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule, RouterLink, RouterLinkActive, MatSidenavModule],
  templateUrl: './employer-layout.component.html',
  styleUrl: './employer-layout.component.scss'
})
export class EmployerLayoutComponent implements OnInit{

    public navigation_menu:any = [
        {label: 'Dashboard', routerLink: 'dashboard', value: 'dashboard'},
        {label: 'Projects', routerLink: 'projects', value: 'projects'},
        {label: 'Team', routerLink: 'teams', value: 'teams'},
        {label: 'Transactions', routerLink: 'transactions', value: 'transactions'},
        {label: 'Payment methods', routerLink: 'payment-method', value: 'payment_method'},
    ];

    constructor(private router:Router, private activeRoute:ActivatedRoute, private sidebar:SidebarService){
        console.log('this.router.getCurrentNavigation()')
    }

    ngOnInit(): void {
        //activeRoute
    }

    toggleMenu(){
        this.sidebar.toggleSidebar('navigation_menu', this.navigation_menu)
    }

}
