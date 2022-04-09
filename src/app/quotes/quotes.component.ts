import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      'Out of the mountain of despair,a stone of hope.',
      'Martin Luther king jr.',
      'Lagat mine',
      0,
      0
    ),
    new Quote(
      "The most damaging phrase in the language is.. it's always been done this way",
      'Grace Hopper',
      'Lagat Mine',
      0,
      0
    ),
    new Quote(
      'The only way to learn a new programming language is by writing programs in it.',
      'Dennis Ritchie',
      'Lagat Mine',
      0,
      0
    ),
    new Quote(
      'Do it today,tomorrow it might be illegal',
      'Lagat Mine',
      'Lagat Mine',
      0,
      0
    ),
    new Quote(
      "Don't write better error messages, write code that doesn't need them.",
      'Jason C. McDonald',
      'Lagat Mine',
      0,
      0
    ),
    new Quote("In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.","Andrew Hunt","Lagat Mine",0,0),
  ];

  constructor() {}

  ngOnInit(): void {}
}
