import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

newQuote = new Quote("","","",new Date(),0,0);
  constructor() { }

  ngOnInit(): void {
  }

}
