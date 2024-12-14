import { JsonPipe, LowerCasePipe, NgClass, NgOptimizedImage } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreditCardBrandIdentifierPipe } from '../../../../pipes/credit-card-brand-identifier.pipe';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { PaymentCardExpiryDirective } from '../../../../directives/payment-card-expiry.directive';
import { PaymentCardNumberDirective } from '../../../../directives/payment-card-number.directive';
import { CommonService } from '../../../../services/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../snackbar/snackbar.component';

@Component({
  selector: 'app-add-payment-card',
  standalone: true,
  imports: [FormsModule, CreditCardBrandIdentifierPipe, MatIconModule, 
    MatInputModule, MatFormFieldModule, LowerCasePipe, MatButtonModule, NgClass,
    MatTooltipModule, JsonPipe, MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose, PaymentCardNumberDirective, PaymentCardExpiryDirective, NgOptimizedImage
],
  templateUrl: './add-payment-card.component.html',
  styleUrl: './add-payment-card.component.scss'
})
export class AddPaymentCardComponent {

    readonly dialogRef = inject(MatDialogRef<AddPaymentCardComponent>);
    public data = inject<any>(MAT_DIALOG_DATA);
    public card_data:any
    public mode:string = 'add';
    private snackBar = inject(MatSnackBar);
    constructor(private common: CommonService){}

    ngOnInit(){
        this.card_data = this.data.card;
        this.mode = this.data.mode;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    addCard(creditCardForm:NgForm){
        this.common.setLoading();
        if(creditCardForm.valid){
            setTimeout(() => {
                this.common.unsetLoading();
                this.dialogRef.close();
                if(this.isEditMode()){
                    this.snackBar.openFromComponent(SnackbarComponent, {data: 'edit_credit_card'});
                }else{
                    this.snackBar.openFromComponent(SnackbarComponent, {data: 'added_credit_card'});
                }
            }, 2000)
        }else{
            setTimeout(() => {this.common.unsetLoading();}, 500)
            
            Object.values(creditCardForm.controls).forEach((control:any) => {
                control.markAsDirty();
                control.updateValueAndValidity(); // Refresh the control's validity state
            });
            setTimeout(() => {
                this.snackBar.openFromComponent(SnackbarComponent, {data: 'error_in_credit_card'});
            }, 900)
            
        }
    }

    isEditMode(){
        return (this.mode == 'edit') ? true : false;
    }
}
