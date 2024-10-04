import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[PaymentCardExpiry]',
  standalone: true
})
export class PaymentCardExpiryDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any){

    let initial_value = this.el.nativeElement.value;
    initial_value = initial_value.replace(/[^0-9]/g, '');

    if(initial_value > 2){
      initial_value = initial_value.slice(0, 2) + '/' + initial_value.slice(2, 4);
    }

    this.el.nativeElement.value = initial_value;

    if(initial_value !== this.el.nativeElement.value){

      event.stopPropagation();
    }
  }

}
