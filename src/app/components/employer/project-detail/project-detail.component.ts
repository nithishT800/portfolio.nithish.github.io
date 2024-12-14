import { ScrollingModule } from '@angular/cdk/scrolling';
import { CurrencyPipe, JsonPipe, NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Breadcrumb } from "../../blocks/breadcrumb";
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FreelancerProfileComponent } from '../../blocks/dialogs/freelancer-profile/freelancer-profile.component';
import {MatDialog,} from '@angular/material/dialog';
import { ContractTermConditionsCardComponent } from "../../blocks/contract-term-conditions-card/contract-term-conditions-card.component";
import { ContractSummaryCardComponent } from "../../blocks/contract-summary-card/contract-summary-card.component";
import { ContractPolicyCardComponent } from "../../blocks/contract-policy-card/contract-policy-card.component";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'; 
import { SnackbarComponent } from '../../blocks/snackbar/snackbar.component';
import { HireFreelancerComponent } from '../../blocks/dialogs/hire-freelancer/hire-freelancer.component';
import {MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import { ProjectDetailNavListComponent } from '../../blocks/bottomsheets/project-detail-nav-list/project-detail-nav-list.component';
import { DomSanitizer } from '@angular/platform-browser';

const liked_icon = 
`
<svg class='heart-liked'  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323">
    <circle class="circle-1" cx="8.85" cy="7.44" r="1.5"/>
    <circle class="circle-2" cx="33.2" cy="33.67" r="1"/>
    <circle class="circle-3" cx="32.08" cy="8.25" r=".75"/>
    <circle class="circle-3" cx="8.33" cy="35.38" r=".75"/>
    <path class="flower-1" d="m9.1,5.37c-.24.14-.54.06-.68-.18s-.06-.54.18-.68.54-.06.68.18.06.54-.18.68Zm-2.42.32c-.28,0-.5.22-.5.5,0,.28.22.5.5.5s.5-.22.5-.5c0-.28-.22-.5-.5-.5Zm-.43,2.75c-.14.24-.06.54.18.68s.54.06.68-.18.06-.54-.18-.68-.54-.06-.68.18Zm2.17,1.75c.14.24.44.32.68.18s.32-.44.18-.68-.44-.32-.68-.18-.32.44-.18.68Zm2.6-1c.28,0,.5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5Zm.43-2.75c.14-.24.06-.54-.18-.68s-.54-.06-.68.18-.06.54.18.68.54.06.68-.18Z"/>
    <path class="flower-2" d="m7.83,33.13c0-.28.22-.5.5-.5s.5.22.5.5c0,.28-.22.5-.5.5s-.5-.22-.5-.5Zm-1.02,1.38c.14-.24.06-.54-.18-.68s-.54-.06-.68.18-.06.54.18.68.54.06.68-.18Zm0,1.75c-.14-.24-.44-.32-.68-.18s-.32.44-.18.68.44.32.68.18.32-.44.18-.68Zm1.52.88c-.28,0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5Zm1.52-.87c-.14.24-.06.54.18.68s.54.06.68-.18.06-.54-.18-.68-.54-.06-.68.18Zm0-1.75c.14.24.44.32.68.18s.32-.44.18-.68-.44-.32-.68-.18-.32.44-.18.68Z"/>
    <path class="flower-3" d="m32.7,36.17c0-.28.22-.5.5-.5s.5.22.5.5c0,.28-.22.5-.5.5s-.5-.22-.5-.5Zm3.1-1c.14-.24.06-.54-.18-.68s-.54-.06-.68.18-.06.54.18.68.54.06.68-.18Zm0-3c-.14-.24-.44-.32-.68-.18s-.32.44-.18.68.44.32.68.18.32-.44.18-.68Zm-2.6-1.5c-.28,0-.5.22-.5.5,0,.28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5Zm-2.6,1.5c-.14.24-.06.54.18.68s.54.06.68-.18.06-.54-.18-.68-.54-.06-.68.18Zm0,3c.14.24.44.32.68.18s.32-.44.18-.68-.44-.32-.68-.18-.32.44-.18.68Z"/>
    <path class="flower-2" d="m32.58,6c0,.28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5.5.22.5.5Zm-2.88.87c-.14.24-.06.54.18.68s.54.06.68-.18.06-.54-.18-.68-.54-.06-.68.18Zm0,2.75c.14.24.44.32.68.18s.32-.44.18-.68-.44-.32-.68-.18-.32.44-.18.68Zm2.38,1.38c.28,0,.5-.22.5-.5,0-.28-.22-.5-.5-.5s-.5.22-.5.5c0,.28.22.5.5.5Zm2.38-1.37c.14-.24.06-.54-.18-.68s-.54-.06-.68.18-.06.54.18.68.54.06.68-.18Zm0-2.75c-.14-.24-.44-.32-.68-.18s-.32.44-.18.68.44.32.68.18.32-.44.18-.68Z"/>
    <line class="line line-1" x1="33.2" y1="33.67" x2="37.16" y2="37.63"/>
    <line class="line line-4" x1="32.08" y1="8.25" x2="36.74" y2="3.59"/>
    <line class="line line-3" x1="8.73" y1="7.3" x2="4.63" y2="3.2"/>
    <line class="line line-2" x1="8.33" y1="35.38" x2="5.72" y2="37.99"/>
    <path class="line line-2" d="m24.47,8.03c-1.32-1.84,1.6-5.11,2.06-2.97.37,1.74-4.2,0-2.68-2.97"/>
    <path class="line line-6" d="m27.15,32.66c.75,1.37-2.07,5.62-2.82,3.96-.64-1.42,3.02-1.3,3.76,1.36"/>
    <line class="line line-7" x1="33.46" y1="29.71" x2="37.97" y2="29.71"/>
    <line class="line line-5" x1="7.56" y1="13.99" x2="2.91" y2="13.99"/>
    <path class="heart" d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/>
</svg>
`
const not_liked_icon = 
`
<svg class='heart-not-liked' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
`

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [MatCardModule, MatListModule, RouterLinkActive, RouterLink, JsonPipe, MatIconModule, ScrollingModule, MatPaginatorModule, Breadcrumb,
    MatButtonModule, CurrencyPipe, MatRadioModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSliderModule, ContractTermConditionsCardComponent, 
    ContractSummaryCardComponent, ContractPolicyCardComponent, MatSnackBarModule, MatBottomSheetModule, NgClass],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit{

    public project_detail:any = {};
    public is_ready:boolean = false;
    public params:any = {};
    public freelancer_list:any = [];
    public offer_list:any = [];
    public offer:any = {};
    readonly dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    public non_hire_project_detail_nav_list = [
        {label: 'Freelancers', routerLink: 'freelancers', value: 'freelancers'},
        {label: 'Offers', routerLink: 'offers', value: 'offers'},
        {label: 'Terms & Conditions', routerLink: 'terms-conditions', value: 'terms_conditions'},
        {label: 'Policies', routerLink: 'policies', value: 'policies'},
        {label: 'Summary', routerLink: 'summary', value: 'summary'},
    ]

    public hire_project_detail_nav_list = [
        {label: 'Contract', routerLink: 'contract', value: 'contract'},
        {label: 'Terms & Conditions', routerLink: 'terms-conditions', value: 'terms_conditions'},
        {label: 'Policies', routerLink: 'policies', value: 'policies'},
        {label: 'Summary', routerLink: 'summary', value: 'summary'},
    ];
    private _bottomSheet = inject(MatBottomSheet);
    public project_detail_nav_list:any = [];

    constructor(private activatedRoute:ActivatedRoute, private router: Router, private http:HttpClient){
        const iconRegistry = inject(MatIconRegistry);
        const sanitizer = inject(DomSanitizer);
        iconRegistry.addSvgIconLiteral('heart-liked', sanitizer.bypassSecurityTrustHtml(liked_icon));
        iconRegistry.addSvgIconLiteral('heart-not-liked', sanitizer.bypassSecurityTrustHtml(not_liked_icon));
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((event:any) => {
            this.params = event;
        })
        this.getContractList()
    }

    getContractList(){
        this.http.get('data/projects.json').subscribe((response:any) => {
            this.project_detail = response.filter((project:any) => project.project_number_uid == this.params.project_id)[0];
            if(this.project_detail){
                if(this.project_detail.project_is_started){
                    this.project_detail_nav_list = this.hire_project_detail_nav_list;
                }else{
                    this.project_detail_nav_list = this.non_hire_project_detail_nav_list;
                }
                this.is_ready = true;
                this.getFreelancers();
                this.getOffers();
            }
        })
    }

    getFreelancers(){
        this.http.get('data/freelancers.json').subscribe((response:any) => {
            this.freelancer_list = response;
        })
    }

    getOffers(){
        this.http.get('data/offers.json').subscribe((response:any) => {
            this.offer_list = response;
        })
    }

    toggleFavorite(freelancer:any){
        freelancer.is_favorite = !freelancer.is_favorite
        if(freelancer.is_favorite){
            this.snackBar.openFromComponent(SnackbarComponent, {data: 'favorite_freelancer'});
        }
    }
    
    toggleShortList(freelancer:any){
        freelancer.is_shortlisted = !freelancer.is_shortlisted
    }

    toggleRequestFreelancer(freelancer:any){
        freelancer.is_requested = !freelancer.is_requested;
        if(freelancer.is_requested){
            this.snackBar.openFromComponent(SnackbarComponent, {data: 'request_freelancer'});
        }
    }

    showFreelancerProfile(freelancer:any){
        const dialogRef = this.dialog.open(FreelancerProfileComponent, {
            data: freelancer,
        });
      
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result !== undefined) {
              //do something here
            }
        });
    }
   
    intiHireFreelancer(offer:any){
        const dialogRef = this.dialog.open(HireFreelancerComponent, {
            data: offer,
            width: '100vh',
        });
      
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
              //do something here
            }
        });
    }

    showBottomNavMenu(){
        this._bottomSheet.open(ProjectDetailNavListComponent, 
            {
                data: {nav_list: this.project_detail_nav_list, params: this.params}
            }
        );
    }
}
