import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class User {
  user: Object

  constructor() {
    this.user = {
      lastName: "caby",
      firstName: "",
      birthDate: new Date(),
    }
  }

  createAccount() {
    console.log(this.user);
  }
}
