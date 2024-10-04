import { Component, inject, Input, model, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LottieAnimationsComponent } from "../lottie-animations/lottie-animations.component"; 

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatProgressSpinnerModule, MatIcon, LottieAnimationsComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit{

    readonly dialogRef = inject(MatDialogRef<any>);
    readonly data = inject<any>(MAT_DIALOG_DATA);
    public key:string = ''
    public message_data:any

    closeDialog(): void {
        this.dialogRef.close();
    }
    
    ngOnInit(): void {
        this.key = this.data.key;
        this.message_data = this.data.data;
    }    
}

