import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { SidebarNavMenuComponent } from "../sidebar-nav-menu/sidebar-nav-menu.component";

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, SidebarComponent, MatIconModule, MatButtonModule, MatToolbarModule, JsonPipe, SidebarNavMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{

    @Input() sidebar_key!:string;
    @Input() sidebar_data!:any;

    ngOnInit(): void {}
}
