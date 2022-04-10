export class Quotes {
  public showDetails: boolean;
  public showButton: boolean;
  public quote: string;
  public author: string;
  public posted_by: string;
  public postedDate: Date;
  public upvote: number;
  public downvote: number;

  constructor(
    quote: string,
    author: string,
    posted_by: string,
    postedDate: Date,
    upvote: number,
    downvote: number
  ) {
    this.quote = quote;
    this.author = author;
    this.posted_by = posted_by;
    this.postedDate = new Date();
    this.upvote = 0;
    this.downvote = 0;
    this.showDetails = false;
    this.showButton = true;
  }
}
