import { Component, Input, OnInit } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'lottie-animations',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './lottie-animations.component.html',
  styleUrl: './lottie-animations.component.scss'
})
export class LottieAnimationsComponent implements OnInit{

    @Input() context_key!:string;
    public options:AnimationOptions = {};
    private animationItem!: AnimationItem;
    public height:string=''
    public width:string=''

    constructor(private common:CommonService){}

    ngOnInit(): void {
        this.setAnimationOptions()
    }

    setAnimationOptions(){
        if(this.context_key){
            switch(this.context_key){
                case 'error_project_post':
                case 'failure_hire_freelancer':
                    this.height = '8rem';
                    this.width = '8rem';
                    console.log('loaded')
                    this.options = {path: 'animations/animation-error.json', loop:false}
                    this.animationItem?.play()
                    console.log('loaded')
                break;
                case 'success_project_post':
                case 'success_hire_freelancer':
                    this.height = '10rem';
                    this.width = '10rem';
                    this.options = {path: 'animations/animation-success.json', loop:false}
                    this.animationItem?.play()
                break;
            }
        }
    }

    animationCreated(animationItem: AnimationItem): void {
        this.common.log(animationItem);
    }
}
