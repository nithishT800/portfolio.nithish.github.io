import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarComponent } from '../../blocks/snackbar/snackbar.component';
import { NgClass } from '@angular/common';
import { FreelancerProfileComponent } from '../../blocks/dialogs/freelancer-profile/freelancer-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { TruncatePipe } from "../../../pipes/truncate.pipe";
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-employer-team',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, NgClass, TruncatePipe, MatTooltipModule],
  templateUrl: './employer-team.component.html',
  styleUrl: './employer-team.component.scss'
})
export class EmployerTeamComponent implements OnInit{

    public freelancer_list:any = [];
    private snackBar = inject(MatSnackBar);
    readonly dialog = inject(MatDialog);
    public favorite_freelancer_list:any = [];
    public non_favorite_freelancer_list:any = [];
    
    constructor(private activatedRoute:ActivatedRoute, private router: Router, private http:HttpClient){}
    ngOnInit(): void {
        this.getFreelancers();
    }

    getFreelancers(){
        this.http.get('data/freelancers.json').subscribe((response:any) => {
            this.freelancer_list = response;
            response.forEach((freelancer:any) => {
                if(freelancer.is_favorite){
                    this.favorite_freelancer_list.push(freelancer);
                }else{
                    this.non_favorite_freelancer_list.push(freelancer);
                }
            })
        })
    }

    toggleFavorite(freelancer:any){
        freelancer.is_favorite = !freelancer.is_favorite
        if(freelancer.is_favorite){
            this.favorite_freelancer_list.push(freelancer);
            this.non_favorite_freelancer_list.splice(this.non_favorite_freelancer_list.indexOf(freelancer), 1)
            this.snackBar.openFromComponent(SnackbarComponent, {data: 'favorite_freelancer'});
        }else{
            this.favorite_freelancer_list.splice(this.favorite_freelancer_list.indexOf(freelancer), 1)
            this.non_favorite_freelancer_list.push(freelancer);
            console.log(this.favorite_freelancer_list.indexOf(freelancer), 'freelancer', this.favorite_freelancer_list)
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
    
}
