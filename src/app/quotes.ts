// import { Quote } from '@angular/compiler';

export class Quotes {
  showDetail: boolean;
  quote: string;
  author: string;
  posted_by: string;
  // date_posted:Date;
  upvote: number;
  downvote: number;

  constructor(
    quote: string,
    author: string,
    posted_by: string,
    // date_posted:Date,
    upvote: number,
    downvote: number
  ) {
    this.quote = quote
    this.author = author
    this.posted_by = posted_by
    // this.date_posted = date_posted
    this.upvote= upvote
    this.downvote = downvote
    this.showDetail= false;
  }
}
