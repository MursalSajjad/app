import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  date: string;
  someNumber = 10;

  constructor() { 
setInterval(()=>{
  let currentDate = new Date();
    this.date= currentDate.toDateString() + " " + currentDate.toLocaleTimeString();

},1000);

let array=[32,45,67,87,32,65];
  }

  ngOnInit() {
  }
addNumbers(a:number,b:number)
{
  return a+b;
}
}
