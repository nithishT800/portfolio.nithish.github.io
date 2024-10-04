import { Component, OnInit, signal } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl, FormGroupDirective, NgForm, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import moment from 'moment';
import { projectBasicDetailInterface, projectPaymentDetailInterface, projectPaymentDetailTermsInterface } from './contract-form';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ErrorStateMatcher, provideNativeDateAdapter } from '@angular/material/core';
import { DataService } from '../../../services/data.service';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { CurrencyPipe, JsonPipe, NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { NumberonlyDirective } from '../../../directives/numberonly.directive'
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { CommonService } from '../../../services/common.service';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MessageComponent } from "../../blocks/message/message.component";


export class CustomErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [
    MatButtonModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatChipsModule, MatAutocompleteModule,
    NgClass, MatIcon, MatRadioModule, NumberonlyDirective, CurrencyPipe, MatSelectModule, MatExpansionModule, MatCardModule, MatListModule, JsonPipe,
    MatCheckboxModule,
    MessageComponent
],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss',
  providers: [provideNativeDateAdapter()]

})
export class CreateProjectComponent implements OnInit{

    public create_project_form:any = {};
    public project_form:any = {}
    public skill_list:any = [];
    public selected_filter_skills:any = [];
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    public filtered_cities!: Observable<string[]>;
    public cities_list:any = [];
    public step = signal(0);
    error_matcher = new CustomErrorStateMatcher();

    public min_date = new Date();
    public max_date = new Date(this.min_date.getFullYear()+2, 12, 31);

    public is_project_success:boolean = false

    constructor(private data: DataService, private common:CommonService){}

    ngOnInit(): void {
        this.initContractForm();
        this.getCities();
        this.getSkills('A');
    }

    initContractForm(){
        this.create_project_form = {project_basic_detail : projectBasicDetailInterface, project_payment_detail : projectPaymentDetailInterface, project_terms_and_conditions: projectPaymentDetailTermsInterface}
    }

    getContractTotalHours(){

        const startDate = moment(this.create_project_form.project_basic_detail.value.project_start_date); // Example start date
        const endDate = moment(this.create_project_form.project_basic_detail.value.project_end_date);   // Example end date

        const duration = moment.duration(endDate.diff(startDate));
        const days = duration.asDays();

        let total_hours = 0;

        if(this.create_project_form.project_payment_detail.value.project_hours_per_day < 24){

            total_hours = days * this.create_project_form.project_payment_detail.value.project_hours_per_day;
        }else{
            this.create_project_form.project_payment_detail.setEee
        }
        
        return total_hours;
    }
    getContractTotalDays(){

        const startDate = moment(this.create_project_form.project_basic_detail.value.project_start_date); // Example start date
        const endDate = moment(this.create_project_form.project_basic_detail.value.project_end_date);   // Example end date

        const duration = moment.duration(endDate.diff(startDate));
        const days = duration.asDays();

        return days;

    }

    onSubmit(){

        this.common.showMessageDialog('project_created');

        let form = Object.assign(this.project_form, this.create_project_form.project_basic_detail.value, this.create_project_form.project_payment_detail.value, this.create_project_form.project_terms_and_conditions.value);
        //this.common.log(this.create_project_form.project_basic_detail.valid, 'this.create_project_form.project_basic_detail')

        if(this.create_project_form.project_basic_detail.valid && this.create_project_form.project_payment_detail.valid && this.create_project_form.project_terms_and_conditions.valid){
            this.data.fetch('create_project', form).subscribe((response:any) => {
                setTimeout(() => {
                    this.common.closeMessageDialog();
                },500)
                if(this.common.isResponseSuccess(response)){
                    setTimeout(() => {
                        this.common.showMessageDialog('project_post_success');
                    },700)
                }else{
                    setTimeout(() => {
                        this.common.showMessageDialog('project_form_has_error');
                    },700)
                }
            })
        }else{
            ['project_basic_detail', 'project_payment_detail', 'project_terms_and_conditions'].forEach((key) => this.markFormAsRead(this.create_project_form[key]))

            setTimeout(() => {
                this.common.closeMessageDialog();
            },500)
            setTimeout(() => {
                this.common.showMessageDialog('project_form_has_error');
            },700)
            
        }
    }

    markFormAsRead(form: FormGroup){
        //this.common.log(form, 'form')
        Object.keys(form.controls).forEach(field => {
            const control = form.get(field);
            if (control instanceof FormGroup) {
              this.markFormAsRead(control);   
        
            } else {
                if(control){
                    control.markAsTouched();
                }
            }
        });
    }

    searchCities($event:any){
        const filterValue = ($event?.target?.value) ? $event?.target?.value.toLowerCase() : '';
        this.getCities(filterValue)
    }

    getCities($value:string = ''){

        this.cities_list = [];

        this.data.getCountries().subscribe(($response:any) => { 
            //this.cities_list = $response.data.filter((option:any) => option.value.toLowerCase().includes($value));
            $response.data.forEach((country:any) => {
                //this.cities_list = country.states.filter((state:any) => state.name.toLowerCase().includes($value))
                country.states.forEach((state:any) => {
                    if(state.name.toLowerCase().includes($value)){
                        this.cities_list.push({city_name: state.name, country_name: country.name})
                    }
                })
            })
            //this.common.log(this.cities_list, 'country')
        })

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

                this.create_project_form.project_basic_detail.patchValue({project_skills : this.selected_filter_skills})
            }
        })
        
    }

    removeSkill(event:any){
        this.selected_filter_skills = this.selected_filter_skills.filter((skill:any) => event.skill_value != skill.skill_value);
    }

    calculateContractBudget(){

        let total_amount = 0

        total_amount = this.getContractTotalHours() * this.create_project_form.project_payment_detail.value.project_payment_rate;        

        return total_amount

        
    }

    setStep(index: number) {
        this.step.set(index);
    }

    nextStep() {
        this.step.update(i => i + 1);
    }
    
    prevStep() {
        this.step.update(i => i - 1);
    }

    onFileSelect($event:any){

        const file:File = $event.target.files[0];

        //this.common.log(file, '<------file')

        if(file){

            this.create_project_form.project_terms_and_conditions.patchValue({file_name: file.name});
            this.create_project_form.project_terms_and_conditions.patchValue({contract_employer_contract_attachment_files: file});
        }
    }

    contractMaxDate(date:any){
        //this.common.log(date, 'date')
        return ''
    }
}
