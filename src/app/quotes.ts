export class Quote {
  public showDetails: boolean;
  public showButton: boolean;
  public votes: number;
  quote: string;
  author: string;
  posted_by: string;
  postedDate: Date;
  upVote: number;
  downVote: number;
  

  constructor(
    quote: string,
    author: string,
    posted_by: string,
    postedDate: Date,
    upVote: number,
    downVote: number
  ) {
    this.quote = quote;
    this.author = author;
    this.posted_by = posted_by;
    this.postedDate = new Date();
    this.upVote = 0;
    this.downVote = 0;
    this.showDetails = false;
    this.showButton = true;
    this.votes = 0;
  }
}
