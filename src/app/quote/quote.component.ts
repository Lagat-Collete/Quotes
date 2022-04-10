import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import {  Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
@Output() isDelete = new EventEmitter<boolean>();
quotes: Quote[] = [
  new Quote('"First, solve the problem. Then, write the code."',' John Johnson','Collete Mine',new Date(2022,4,9),0,0),
  new Quote('"Make it work, make it right, make it fast."','Kent Beck','Collete Mine',new Date(2022,4,9),0,0),
  new Quote('"Before software can be reusable it first has to be usable"','Ralph Johnson','Collete Mine',new Date(2022,4,9),0,0),
  new Quote('"Fix the cause, not the symptom."','Steve Maguire','Collete Mine',new Date(2022,4,9),0,0),
  new Quote(' "Code is like humor. When you have to explain it, it is bad."','Cory House','Collete Mine',new Date(2022,4,9),0,0),
  new Quote('"Experience is the name everyone gives to their mistakes."','Oscar Wilde','Collete Mine',new Date(2022,4,9),0,0),
]

deleteDetails(Complete: any,index: any) {
  if(Complete) {
    let toDelete = confirm('Are you sure about deleting the Quote?')
    if(toDelete) {
      this.quotes.splice(index, 1);
    }
  }
}
encouraged(i: number) {
  // this.quotes.upVote++
  this.quotes[i].votes = this.quotes[i].votes + 1
  if (this.quotes[i].votes > this.totalVotes) {
    this.totalVotes = this.quotes[i].votes
  }
}

addNewQuote(quote:any) {
  this.quotes.push(quote)
}

showDet(index: any) {
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
  this.quotes[index].showButton = !this.quotes[index].showButton;
}

totalVotes: number = 0;
unlike(){
  // this.quotes.downVote++
}
  constructor() { }

  ngOnInit(): void {
  }

}
