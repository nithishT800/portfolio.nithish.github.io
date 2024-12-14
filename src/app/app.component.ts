import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from "./components/blocks/sidebar/sidebar.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClient } from '@angular/common/http';
import { SidebarService } from './services/sidebar.service';
import { MatIconModule } from '@angular/material/icon';
import { LayoutService } from './services/layout.service';
import { CommonService } from './services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { DisclaimerComponent } from './components/blocks/dialogs/disclaimer/disclaimer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatSidenavModule, SidebarComponent, MatToolbarModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit{

    isSidebarOpen:boolean = false;
    readonly dialog = inject(MatDialog);
    public sidebar_key:string = '';
    public sidebar_data:any = {}
    public sidebar_title:any;
    public is_ready:boolean = false;
    constructor(private http:HttpClient, private sidebar:SidebarService, private layout:LayoutService, private common:CommonService){}

    ngOnInit(): void {
        this.layout.initTheme();
        this.initDisclaimer();
        this.sidebar.getSidebarEvent().subscribe((response:any) => {
            this.toggleSidebar(response);
        })
    }   

    ngAfterViewInit(){
        setTimeout(() => {
            this.is_ready = true;
        }, 100)
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
                case 'close_sidebar':
                    this.isSidebarOpen = !this.isSidebarOpen
                break;
            }
        }
    }

    closeSidebar(){
        this.isSidebarOpen = false
    }

    initDisclaimer(){
        if(this.common.canShowDisclaimer()){
            this.openDisclaimer()
        }
    }

    openDisclaimer(){
        const dialogRef = this.dialog.open(DisclaimerComponent, {
            data: {},
          });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                
            }
        });
    }
}
