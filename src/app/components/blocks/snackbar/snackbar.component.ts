import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction, MatSnackBarRef, MAT_SNACK_BAR_DATA, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction, MatIcon],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
})
export class SnackbarComponent {
    message:string = ''
    snackBarRef = inject(MatSnackBarRef);
    constructor(@Inject(MAT_SNACK_BAR_DATA) public key: string) {}

    ngOnInit(){
        this.setMessage();
    }
    setMessage(){
        switch(this.key){
            case 'message_login_success':
                this.message = 'Success'
            break;
            case 'message_login_failure':
                this.message = 'Failed! Please enter correct Email or Password.'
            break;
            case 'message_login_wrong_credentials':
                this.message = 'Please enter credentials.'
            break;
            case 'message_register_success':
                this.message = 'Success'
            break;
            case 'message_register_failure':
                this.message = 'Failed! Please enter correct Email or Password.'
            break;
            case 'message_register_wrong_credentials':
                this.message = 'Please enter credentials.'
            break;
            case 'favorite_freelancer':
                this.message = 'Liked freelancer profile'
            break;
            case 'request_freelancer':
                this.message = 'Requested freelancer for the project.'
            break;
            case 'error_employer_payment_card_selection':
                this.message = 'Please select a card for payment!'
            break;
            case 'delete_project':
                this.message = 'Deleted the project'
            break;
            case 'changed_primary_card':
                this.message = "Marked card as primary"
            break;
            case 'edit_credit_card':
                this.message = "Updated card successfully"
            break;
            case 'added_credit_card':
                this.message = "Added card successfully"
            break;
            case 'error_in_credit_card':
                this.message = "Please fill the details properly"
            break;
            

        }
    }
}
