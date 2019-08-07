import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  getApiResponse() {
    throw new Error("Method not implemented.");
  }
  printToConsole(args)
  {
    console.log(args);
  }
  // constructor() { }
}
