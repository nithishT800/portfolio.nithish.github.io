import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Numberonly]',
  standalone: true
})
export class NumberonlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any){

    const initial_value = this.el.nativeElement.value;
    this.el.nativeElement.value = initial_value.replace(/[^0-9]*/g, '');
    if(initial_value !== this.el.nativeElement.value){
        event.stopPropagation();
    }
  }

}
