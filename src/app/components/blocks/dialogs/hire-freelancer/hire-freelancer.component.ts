import { JsonPipe, CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../snackbar/snackbar.component';
import { CommonService } from '../../../../services/common.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatListModule} from '@angular/material/list'; 
import { NumberonlyDirective } from '../../../../directives/numberonly.directive';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider'; 
import { LoadingComponent } from '../../loading/loading.component';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-hire-freelancer',
  standalone: true,
  imports: [
    LottieComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose, JsonPipe, MatIconModule, CurrencyPipe, MatProgressSpinnerModule, MatListModule, NumberonlyDirective, MatTooltipModule, MatDividerModule],
  templateUrl: './hire-freelancer.component.html',
  styleUrl: './hire-freelancer.component.scss'
})
export class HireFreelancerComponent {

    readonly dialogRef = inject(MatDialogRef<HireFreelancerComponent>);
    readonly loadingDialogRef = inject(MatDialogRef<LoadingComponent>);
    public options = {path: 'animations/animation-success.json', loop:false}
    readonly data = inject<any>(MAT_DIALOG_DATA);
    private snackBar = inject(MatSnackBar);
    public can_move_steps:boolean = false;
    public hire_freelancer_steps:any = [
                                            {label: 'Overview', value: 'overview'},
                                            {label: 'Payment', value: 'payment'},
                                            {label: 'Confirm', value: 'confirm'},
                                            {label: 'Done', value: 'done'},
                                    ]

    public hire_freelancer_active_step:any = {}
    public credit_card_list:any = [];
    public credit_card:any = {};
    public is_loading:boolean = false;

    constructor(private http: HttpClient, private common: CommonService){}

    ngOnInit(){
        this.hire_freelancer_active_step = this.hire_freelancer_steps[0];
        this.getCreditCardList();
    }

    getCreditCardList(){
        this.http.get('data/credit-cards.json').subscribe(($response:any) => {
            this.credit_card_list = $response;
        })
    }

    selectCard(card:any){
        this.credit_card = card;
    }

    makePayment(){

        this.common.setLoading();
        setTimeout(() => {
            this.goToNextStep();
            this.common.unsetLoading();
        }, 1500)
    }

    getActiveStepIndex(){
        return this.hire_freelancer_steps.indexOf(this.hire_freelancer_active_step) + 1
    }

    goToNextStep(){
        let index = this.hire_freelancer_steps.indexOf(this.hire_freelancer_active_step);
        if((index+1) < this.hire_freelancer_steps.length){//&& this.common.isObjectEmpty(this.credit_card)
            switch(this.hire_freelancer_active_step.value){
                case 'payment':
                    if(this.common.isObjectEmpty(this.credit_card)){
                        this.snackBar.openFromComponent(SnackbarComponent, {data: 'error_employer_payment_card_selection'});
                        
                    }else{
                        index++
                        this.hire_freelancer_active_step = this.hire_freelancer_steps[index];
                    }
                break;

                default:
                    index++
                    this.hire_freelancer_active_step = this.hire_freelancer_steps[index];
                break;
            }
            
        }
    }

    goToPreviousStep(){
        let index = this.hire_freelancer_steps.indexOf(this.hire_freelancer_active_step);
        if(index > 0){
            index--
            this.hire_freelancer_active_step = this.hire_freelancer_steps[index];
        }
    }
    closeReviewOffer(){
       
        this.dialogRef.close();
    }

    animationCreated(animationItem: AnimationItem): void {
        this.common.log(animationItem);
    }

}
