import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from "./components/blocks/sidebar/sidebar.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClient } from '@angular/common/http';
import { SidebarService } from './services/sidebar.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatSidenavModule, SidebarComponent, MatToolbarModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isSidebarOpen:boolean = false;
  public sidebar_key:string = '';
  public sidebar_data:any = {}
  public sidebar_title:any;

  constructor(private http:HttpClient, private sidebar:SidebarService){}

    ngOnInit(): void {
        this.sidebar.getSidebarEvent().subscribe((response:any) => {
            this.toggleSidebar(response);
        })
    }   
  
    toggleSidebar(response:any){
        
        if(response.sidebar_key){
            this.sidebar_key = response.sidebar_key;
            if(response.data){
                this.sidebar_data = response.data;
            }

            switch(this.sidebar_key){
                case 'navigation_menu':
                    this.sidebar_title = 'Menu'
                    this.isSidebarOpen = !this.isSidebarOpen
                break;
            }
        }
    }

    closeSidebar(){
        this.isSidebarOpen = false
    }

}
