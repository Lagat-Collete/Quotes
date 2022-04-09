import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[] = [ 
    
    new Quotes(
      '"Out of the mountain of despair,a stone of hope."',
      'Martin Luther king jr.',
      'Lagat mine',
      new Date(2022,3,1),
      0,
      0
    ),
    new Quotes(
      '"No code has zero defects."',
      'Grace Hopper',
      'Lagat Mine',
      new Date(2022,3,9),
      0,
      0
    ),
    new Quotes(
      '"Q: If 1 is true and 0 is false? A: 1."',
      'Dennis Ritchie',
      'Lagat Mine',
      new Date(2022,3,9),
      0,
      0
    ),
    new Quotes(
      '"Do it today,it might be illegal tomorrow."',
      'Lagat Mine',
      'Lagat Mine',
      new Date(2022,3,9),
      0,
      0
    ),
    new Quotes(
      '"Remember that there is no code faster than no code."',
      'Jason C. McDonald',
      'Lagat Mine',
      new Date(2022,3,9),
      0,
      0
    ),
    new Quotes(
      '"Programmer: A machine that turns coffee into code."',
      'Andrew Hunt',
      'Lagat Mine',
      new Date(2022,3,9),
      0,
      0
    ),
  ];
// getting the highest vote
  arr:number[] = this.quotes.map(quote=>quote.upvote)
  highest = Math.max(...this.arr)


  deleteQuote(isComplete: any, index: number){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
