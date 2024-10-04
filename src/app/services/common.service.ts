import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { MessageComponent } from '../components/blocks/message/message.component';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
    readonly dialog = inject(MatDialog);
    private _snackBar = inject(MatSnackBar);
    constructor() { }

    isResponseSuccess(response:any){
        if(response.success === 'true' || response.success === true || response.success === 1 || response.success === '1'){
            return true;
        }else{
            return false;
        }
    }

    showResponseMessage(response:any, action:string = ''){
        let action_text = (action) ? action : 'Close' ;
        let properties:MatSnackBarConfig = {horizontalPosition: 'center', verticalPosition: 'top', duration: 3000}
        if(this.isResponseSuccess(response)){
            if(response.hasOwnProperty('message')){
                this._snackBar.open(response.message, action_text, properties)
            }else{
                this._snackBar.open('Done', action_text, properties)
            }
        }else{
            this._snackBar.open(response.message, action_text, properties)
        }
    }

    showMessageDialog(key:string, data:any={}){

        const dialogRef = this.dialog.open(MessageComponent, {
            data: {data: data, key: key},
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result !== undefined) {
            
            }
        });
    }

    closeMessageDialog(){
        this.dialog.closeAll()
    }

    log(...data:any){
        if(environment.production){
            console.log(data);
        }
    }
}
