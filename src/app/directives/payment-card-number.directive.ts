import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[PaymentCardNumber]',
  standalone: true
})
export class PaymentCardNumberDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any){

    let initial_value = this.el.nativeElement.value;
    initial_value = initial_value.replace(/[^0-9]*/g, '');
    initial_value = initial_value.replace(/(.{4})/g, '$1 ');
    this.el.nativeElement.value = initial_value.trim();
    if(initial_value !== this.el.nativeElement.value){
        event.stopPropagation();
    }
  }

}
