import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import { NgClass } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { provideNativeDateAdapter } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [
    MatCardModule, MatButtonModule,MatInputModule, FormsModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatTooltipModule, MatListModule,
    RouterLink, RouterLinkActive, MatDividerModule, NgClass, MatChipsModule, MatAutocompleteModule
  ],
  templateUrl: './employer-profile.component.html',
  styleUrl: './employer-profile.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class EmployerProfileComponent implements OnInit{

    public skill_list:any = [];
    public selected_filter_skills:any = [{skill_name: 'HTML', skill_value: 'html'}, {skill_name: 'JavaScript', skill_value: 'javascript'}, {skill_name: 'CSS', skill_value: 'css'}];
    public params:any = {};
    public profile_nav_list:any = [
        {label: 'Contact', routerLink: 'contact', value: 'contact', icon: 'account_circle'},
        {label: 'Skills', routerLink: 'skills', value: 'skills', icon: 'account_circle'},
        {label: 'Experience', routerLink: 'experience', value: 'contact', icon: 'account_circle'},
        {label: 'Your documents', routerLink: 'documents', value: 'contact', icon: 'account_circle'},
    ];
    public work_experience:any = [];
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];

    constructor(private activatedRoute:ActivatedRoute, private router: Router, private data: DataService, private http:HttpClient){}

    ngOnInit(){
        this.activatedRoute.params.subscribe((event:any) => {
            this.params = event;
        })
        this.getSkills('A');
        this.getWorkExperience();
    }

    getSkills(search_value:any){
        this.skill_list = [];        
        this.data.getSkills().subscribe((response:any) => {
            this.skill_list = response.filter((skill:any) => skill.skill_value.includes(search_value));
        });
    }

    searchSkill(event:any){

        let input = event.target.value;

        setTimeout(() => {
            this.getSkills(input);
        },300)

    }

    selectedSkill(event: any): void{
        
        this.skill_list.forEach((skill:any) => {

            if(skill.skill_value == event.option.value){
                
                this.selected_filter_skills.push(skill);

            }
        })
        
    }

    removeSkill(event:any){
        this.selected_filter_skills = this.selected_filter_skills.filter((skill:any) => event.skill_value != skill.skill_value);
    }

    getWorkExperience(){
        this.http.get('data/employer-experience.json').subscribe((response:any) => {
            this.work_experience = response;
        })
    }
}
