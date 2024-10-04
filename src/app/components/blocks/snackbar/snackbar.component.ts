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
        }
    }
}
