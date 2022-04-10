import { Component, EventEmitter,Input, OnInit,Output } from '@angular/core';
import { QuoteComponent } from '../quote/quote.component';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()
  quotes: any;
  showDetails!: QuoteComponent;
  @Output() isDelete = new EventEmitter<boolean>();
  totalVotes: number = 0;
  quoteDelete(complete: boolean) {
    this.isDelete.emit(complete);
  }
  encouraged() {
    // this.quotes[i].votes = this.quotes[i].votes + 1
    this.quotes.upVote++
    // if (this.quotes[i].votes  > this.totalVotes) {
      // this.totalvotes = this.quotes.upVote
    // }
  }
unlike() {
  this.quotes.downVote++
}
  constructor() { }

  ngOnInit(): void {
  }

}
