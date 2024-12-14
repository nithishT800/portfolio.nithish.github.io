import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider'; 
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employer-notifications',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatIconModule, MatButtonModule, MatCardModule, MatBadgeModule, MatTooltipModule, RouterOutlet],
  templateUrl: './employer-notifications.component.html',
  styleUrl: './employer-notifications.component.scss'
})
export class EmployerNotificationsComponent implements OnInit{

    public notification_list:any = [];
    public unread_message_count:number = 0;
    constructor(private http: HttpClient){}

    ngOnInit(): void {
        this.getNotifications();
    }

    getNotifications(){
        this.http.get('data/notification.json').subscribe((response:any) => {
            this.notification_list = response;
            this.notification_list.forEach((notification:any) => {
                if(!notification.notification_is_read){
                    this.unread_message_count++
                }
            })
        })
    }



}
