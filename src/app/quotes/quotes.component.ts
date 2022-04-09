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
      
      0,
      0
    ),
    new Quotes(
      '"most damaging phrase in the language is.. it is always been done this."',
      'Grace Hopper',
      'Lagat Mine',
      
      0,
      0
    ),
    new Quotes(
      '"The only way to learn a new programming language is by writing programs in it."',
      'Dennis Ritchie',
      'Lagat Mine',
    
      0,
      0
    ),
    new Quotes(
      '"Do it today,it might be illegal tomorrow."',
      'Lagat Mine',
      'Lagat Mine',
      
      0,
      0
    ),
    new Quotes(
      '"Do not write better error messages, write code that does not need them&#8221."',
      'Jason C. McDonald',
      'Lagat Mine',
    
      0,
      0
    ),
    new Quotes(
      '"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them."',
      'Andrew Hunt',
      'Lagat Mine',
      
      0,
      0
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
