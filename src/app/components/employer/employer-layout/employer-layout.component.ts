import { Component, effect, ElementRef, Inject, OnInit, signal, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarService } from '../../../services/sidebar.service';
import {MatMenuModule} from '@angular/material/menu';
import { DOCUMENT } from '@angular/common';
import { LayoutService } from '../../../services/layout.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
@Component({
  selector: 'app-employer-layout',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule, RouterLink, RouterLinkActive, MatSidenavModule, MatMenuModule, MatTooltipModule,
    MatBadgeModule
  ],
  templateUrl: './employer-layout.component.html',
  styleUrl: './employer-layout.component.scss'
})
export class EmployerLayoutComponent implements OnInit{

    is_dark_mode = signal(false); 
    
    public active_theme:string = '';

    public navigation_menu:any = [
        {label: 'Dashboard', routerLink: 'dashboard', value: 'dashboard'},
        {label: 'Projects', routerLink: 'projects', value: 'projects'},
        {label: 'Freelancers', routerLink: 'freelancers', value: 'freelancers'},
        {label: 'Transactions', routerLink: 'transactions', value: 'transactions'},
        {label: 'Payment methods', routerLink: 'payment-method', value: 'payment_method'},
    ];

    constructor(private router:Router, private activeRoute:ActivatedRoute, private sidebar:SidebarService, @Inject(DOCUMENT) private document: Document, private layout:LayoutService){

        
    }


    ngOnInit(): void {
        this.layout.isDarkMode ? this.is_dark_mode.set(true) : this.is_dark_mode.set(false);
    }

    toggleMenu(){
        this.sidebar.toggleSidebar('navigation_menu', this.navigation_menu)
    }

    ngAfterViewInit() {
        
        //this.elementWithClass.nativeElement.className = 'new-class'; // Replaces all classes
    }


    toggleThemeType = effect (() => {
        if(this.layout.isBrowser()){
            //document.documentElement.classList.toggle('dark', this.is_dark_mode());
            if(this.is_dark_mode()){
                this.layout.setDarkTheme();
            }else{
                this.layout.setLightTheme();
            }
        }
    })
    
}
