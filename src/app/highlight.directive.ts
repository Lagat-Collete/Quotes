import { Directive,ElementRef } from '@angular/core';
import { Quote } from './quote';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

quote: Quote;
highest(arr: any[]) {
  arr = [];
  const high =Math.max.apply(Math, arr);
  return high;
}

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.backgroundcolor = "green";
  }

}
