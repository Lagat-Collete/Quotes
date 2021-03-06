import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount',
})
export class DateCountPipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date(); // get the current date and time
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    var dateDifference = Math.abs(todayWithNoTime - value); //returns value in miliseconds
    const secondsInDay = 86400; // 60seconds * 60 minutes in an hour * 24 hours in a day
    
    var dateDifferenceSeconds = dateDifference * 0.001; //convert miliseconds to seconds
    var dateCounter = dateDifferenceSeconds / secondsInDay;
    
    if (dateCounter >= 1) {
      return Math.round(dateCounter);
    } else {
      return null;
    }
  }
}
