import { Component, inject, OnInit, signal } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../blocks/snackbar/snackbar.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CommonService } from '../../../services/common.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule, MatIconModule, RouterLink, MatTooltipModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

    private _snackBar = inject(MatSnackBar);
    public credentials:any = {}
    public is_loading:boolean = false;
    constructor(private data:DataService, private router:Router, private common:CommonService){}

    ngOnInit(): void {
        
    }

    hide = signal(true);
    clickEvent(event: MouseEvent) {
        this.hide.set(!this.hide());
        event.stopPropagation();
    }

    login(loginForm:NgForm){
        this.is_loading = true
        if(loginForm.valid){
            this.common.setLoading();
            setTimeout(() => {
                //this.is_loading = true
                this.common.unsetLoading();
                this._snackBar.openFromComponent(SnackbarComponent, {data: 'message_login_success'});
                this.router.navigate(['/employer/dashboard'])
            }, 1500)
        }else{
            this.is_loading = false
            this._snackBar.openFromComponent(SnackbarComponent, {data: 'message_login_wrong_credentials'});
        }
        
    }
}
