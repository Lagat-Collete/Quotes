// import { Quote } from '@angular/compiler';

export class Quotes {
  showDetail: boolean;
  quote: string;
  author: string;
  posted_by: string;
  postedDate:Date;
  upvote: number;
  downvote: number;

  constructor(
    quote: string,
    author: string,
    posted_by: string,
    postedDate: Date,
    upvote: number,
    downvote: number
  ) {
    this.quote = quote
    this.author = author
    this.posted_by = posted_by
    this.postedDate = new Date
    this.upvote= upvote
    this.downvote = downvote
    this.showDetail= false;
  }
}
