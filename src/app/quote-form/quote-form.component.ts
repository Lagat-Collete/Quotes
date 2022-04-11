// import Output and EventEmitter
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  image:string = "assets/images/quote1.webp";
  
  newQuote = new Quote("","","",new Date(),0,0);
  // addQuote is the event emitter object created
  @Output() addQuote = new EventEmitter<Quote>();
// submitQuote() function for emitting the method
  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
    
  }
}
