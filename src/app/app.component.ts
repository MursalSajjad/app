import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputText: string = "Insert Value";
  courses=[1,3,5,6,7,9];

  data =[
    {id: 1,name: "Mursal"},
    {id: 2,name: "Sana"}
  ];

  constructor(private svc: TestService,private http: HttpClient)
  {
    svc.printToConsole("Go to the Service!!");
  }

  ngOnInit()
  {
    let obs = this.http.get('https://www.google.com');
    obs.subscribe((response) => console.log(response));
  }

}
