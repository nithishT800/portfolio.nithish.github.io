import { CommonModule } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, ActivatedRoute, NavigationEnd, ChildActivationEnd, NavigationStart, RouterLink, RouterLinkActive, } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'breadcrumb',
    imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule,],
    standalone: true,
    template: `
    <div class="flex gap-1 align-items-center">
        @for(breadcrumb of breadcrumb_list; track $index){
            <div><a class="mat-title-large no-underline hover:underline" href="javascript:;"  [routerLink]=[breadcrumb.url]>{{breadcrumb}}</a></div>
            <mat-icon *ngIf="breadcrumb">chevron_right</mat-icon>
        }
    </div>
    `
})

export class Breadcrumb implements OnInit{

    public breadcrumb_list:any = [];

    @Input() params!:any

    constructor(private router:Router, private activatedRoute:ActivatedRoute){}

    ngOnInit(): void {

        this.router.events.subscribe((event) => {

            if (event instanceof NavigationEnd) {

                this.breadcrumb_list = [];
                
                this.updateBreadCrumbs();
            }

        });

        this.activatedRoute.params.subscribe(($params:any) => {

            this.params = $params;

        })
        
        
        this.updateBreadCrumbs();
          
    }


    updateBreadCrumbs(){

        this.setBreadCrumb(this.activatedRoute)
    }

    private setBreadCrumb(activatedRoute:any){
        let breadcrumb_array = activatedRoute?.data?._value?.breadcrumbs;
        let breadcrumbs:any = []
        if(breadcrumb_array.length){
            for(let breadcrumb of breadcrumb_array){
                if(breadcrumb == 'section'){
                    breadcrumbs.push(this.formatBreadcrumb(this.params.section));
                }else{
                    breadcrumbs.push(this.formatBreadcrumb(breadcrumb));
                }
            }

            this.breadcrumb_list = breadcrumbs;
        }
        console.log( this.breadcrumb_list , 'this.breadcrumb_list')
    }


    formatBreadcrumb(breadcrumb:any){
        console.log(breadcrumb, 'formatBreadcrumb')
        if(breadcrumb){
            let string = breadcrumb.replace(/[^\w\s]/g, '');
            console.log(string, 'formatBreadcrumb')
            return string;
        }
        return ''
    }
}