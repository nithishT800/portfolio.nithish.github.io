import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { CommonService } from '../../../services/common.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../blocks/snackbar/snackbar.component';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

    private _snackBar = inject(MatSnackBar);
    public credentials:any = {}
    
    constructor(private data:DataService, private router:Router, private common:CommonService){}

    ngOnInit(): void {
        
    }

    hide = signal(true);
    clickEvent(event: MouseEvent) {
        this.hide.set(!this.hide());
        event.stopPropagation();
    }

    register(form:NgForm){
        // this.data.fetch('auth/register', this.credentials).subscribe((response:any) => {
        //     if(this.common.isResponseSuccess(response)){
        //         this.router.navigate(['/employer/dashboard'])
        //     }else{
        //         if(response.message.length){
        //             for(let message of response.message){
        //                 this.common.showResponseMessage(message, '')
        //             }
        //         }
        //     }
        // })
        
        if(form.valid){
            this.common.setLoading();
            setTimeout(() => {
                //this.is_loading = true
                this.common.unsetLoading();
                this._snackBar.openFromComponent(SnackbarComponent, {data: 'message_register_success'});
                this.router.navigate(['/auth/login'])
            }, 1500)
        }else{
            this._snackBar.openFromComponent(SnackbarComponent, {data: 'message_register_wrong_credentials'});
        }
    }
}
