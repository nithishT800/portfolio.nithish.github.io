import { Component, OnInit, ViewChild } from '@angular/core';
import {MatListModule} from '@angular/material/list'; 
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import {MatCardModule} from '@angular/material/card'; 
import { filter } from 'rxjs';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';
import { StatusTag } from "../../blocks/status-tag";
import {MatChipsModule} from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [MatListModule, RouterLink, RouterLinkActive, MatCardModule, ScrollingModule, MatPaginatorModule, MatBadgeModule, StatusTag, 
    MatChipsModule, MatIcon, MatButtonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit{

    public activeUrl:string = '';
    public project_list:any = [];
    public project_nav_links:any = [
        {label: 'All', routerLink: 'all', value: 'all'},
        {label: 'Active', routerLink: 'active', value: 'active'},
        {label: 'Non active', routerLink: 'non-active', value: 'non_active'},
    ];
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    dataSource:any;

    constructor(private activatedRoute:ActivatedRoute, private router: Router, private http:HttpClient){}

    items = Array.from({length: 20}).map((_, i) => `Item #${i}`);

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.items);
        this.dataSource.paginator = this.paginator;
        this.getContractList()
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }


    getContractList(){
        this.http.get('data/projects.json').subscribe((response:any) => {
            this.project_list = response;
        })
    }


}
