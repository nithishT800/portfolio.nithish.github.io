import { Component, Input, OnInit } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
    selector: 'status-tag',
    standalone: true,
    imports: [MatChipsModule],
    template: `
    <!-- <span class="mat-badge-medium"><span style="display: block !important; position:static !important;" class="mat-badge-content mat-badge-active status-tag-{{status}}">{{text}}</span></span> -->
    <mat-chip class="status-tag-{{status}}">{{text}}</mat-chip>
    `
})

export class StatusTag{

    @Input()status!:string;
    @Input()text!:string 
}