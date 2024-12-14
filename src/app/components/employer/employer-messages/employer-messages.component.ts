import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HttpClient } from '@angular/common/http';
import { DatePipe, JsonPipe, NgClass } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatMenuModule} from '@angular/material/menu';
import {TextFieldModule} from '@angular/cdk/text-field'; 
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-employer-messages',
  standalone: true,
  imports: [
    MatCardModule, MatListModule, ScrollingModule, JsonPipe, MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule,MatFormFieldModule, MatBadgeModule,
    MatMenuModule, TextFieldModule, NgClass, DatePipe
],
  templateUrl: './employer-messages.component.html',
  styleUrl: './employer-messages.component.scss'
})
export class EmployerMessagesComponent implements OnInit{

    public chat_list:any = [];
    public can_show_search:boolean = false;
    public active_chat:any = {};
    public messages:any = [];

    constructor(private http:HttpClient, private layout:LayoutService){}

    ngOnInit(): void {
        this.getChatList();
    }

    getChatList(){
        this.http.get('data/chats.json').subscribe((response:any) => {
            this.chat_list = response;
        })
    }

    getChatMessages(chat:any){
        this.messages = []
        this.active_chat = chat;
        this.http.get('data/messages.json').subscribe((response:any) => {
            this.messages = response
        })
    }
    closeChat(){
        this.messages = []
    }

    isMobileMode(){
        return (this.layout.layoutIsMobile()) ? true : false;
    }
}
