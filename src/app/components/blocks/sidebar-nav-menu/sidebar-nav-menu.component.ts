import { Component, Input, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list'; 
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { SidebarService } from '../../../services/sidebar.service';
@Component({
  selector: 'sidebar-nav-menu',
  standalone: true,
  imports: [MatListModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-nav-menu.component.html',
  styleUrl: './sidebar-nav-menu.component.scss'
})
export class SidebarNavMenuComponent implements OnInit{

    public activeUrl:any;
    @Input() nav_menu!:any

    constructor(private activatedRoute:ActivatedRoute, private router: Router, private sidebar:SidebarService){
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            let urlArray = event.url.split('/')
            this.activeUrl = urlArray[2];
        })
    }

    ngOnInit(): void {}

    closeSidebar(){
        this.sidebar.toggleSidebar('close_sidebar');
    }
}
