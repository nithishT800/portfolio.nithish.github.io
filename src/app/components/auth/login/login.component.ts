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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

    private _snackBar = inject(MatSnackBar);
    public credentials:any = {}
    public is_loading:boolean = false;
    constructor(private data:DataService, private router:Router){}

    ngOnInit(): void {
        
    }

    hide = signal(true);
    clickEvent(event: MouseEvent) {
        this.hide.set(!this.hide());
        event.stopPropagation();
    }

    login(loginForm:NgForm){
        this.is_loading = true
        console.log(loginForm.valid, 'loginForm.valid')
        if(loginForm.valid){
            setTimeout(() => {
                this.is_loading = true
                this._snackBar.openFromComponent(SnackbarComponent, {data: 'message_login_success'});
                this.router.navigate(['/employer/dashboard'])
            }, 1500)
        }else{
            this.is_loading = false
            this._snackBar.openFromComponent(SnackbarComponent, {data: 'message_login_wrong_credentials'});
        }
        
    }
}
