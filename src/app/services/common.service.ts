import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { MessageComponent } from '../components/blocks/message/message.component';
import { environment } from '../../environments/environment';
import { LoadingComponent } from '../components/blocks/loading/loading.component';
import { LayoutService } from './layout.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
    readonly dialog = inject(MatDialog);
    private _snackBar = inject(MatSnackBar);
    //readonly dialogRef = inject(MatDialogRef<LoadingComponent>);
    //private dialogRefs = new Map<string, MatDialogRef<LoadingComponent>>();
    private closeDialog = new Subject<boolean>();
    event$: Observable<boolean> = this.closeDialog.asObservable();
    constructor(private layout:LayoutService) { }

    isResponseSuccess(response:any){
        if(this.isTrue(response.success)){
            return true;
        }
        return false;
    }

    isTrue(data:any){
        if(data === 'true' || data === true || data === 1 || data === '1'){
            return true;
        }
        return false;
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

    setLoading(){
        const dialogRef = this.dialog.open(LoadingComponent, {
            data: {},
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result !== undefined) {
            
            }
        });
    }

    unsetLoading(){
        console.log('triggered')
        this.closeDialog.next(true);
    }


    closeLoading(dialogRef:any){
        dialogRef.close();
    }

    canShowDisclaimer(){
        if(this.layout.isBrowser()){
            if(typeof localStorage !== 'undefined'){
                let has_disclaimer =  localStorage.getItem('seen_disclaimer');
                if(!this.isTrue(has_disclaimer)){
                    localStorage.setItem('seen_disclaimer', 'true');
                    return true;
                }else{console.log(has_disclaimer, 'has_disclaimer')
                    return false;
                }
            }
        }
        return false;
    }

    isObjectEmpty($object:Object):boolean{
        
        return (Object.keys($object).length) ? false : true; 
    }  

    objectHas($object:any, $find:string):boolean{

        if(Object.keys($object).length){

            for(let item in $object){

                return ($object[$find]) ? true : false
            }
        }

        return false;

    }

}
