import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LottieAnimationsComponent } from '../lottie-animations/lottie-animations.component';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatProgressSpinnerModule, MatIcon, LottieAnimationsComponent],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  
  readonly dialogRef = inject(MatDialogRef<LoadingComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  public key:string = ''
  public message_data:any

  constructor(private common: CommonService) {}
  
    ngOnInit(): void {
        this.key = this.data.key;
        this.message_data = this.data.data;
        this.common.event$.subscribe((can_close:boolean) => {
            console.log(can_close, 'can_close')
            if(this.common.isTrue(can_close)){
                this.dialogRef.close();
            }
        })
    }   
  
    closeDialog(): void {
        this.dialogRef.close();
    }
}
