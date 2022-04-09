import { Quote } from "@angular/compiler"

export class Quotes {
  quote: string;
  author: string;
  posted_by: string;
upvote:number;
downvote:number;

  constructor(quote:string, author:string,posted_by:string,upvote:number,downvote:number) {
  this.quote = quote;
  }
}
