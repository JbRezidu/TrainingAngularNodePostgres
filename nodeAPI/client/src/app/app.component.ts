import { Component } from '@angular/core';
// services
import {UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class User {
    user: Object

    constructor(private userService: UserService) {
        this.user = {
            lastName: "caby",
            firstName: "",
            birthDate: new Date(),
        }
    }

    createAccount() {
        //console.log(this.user);
        this.userService.createUser(this.user)
            .then(res => {
                console.log(res);            
            })
            .catch(err => {
                console.log(err);
            });
    }
}
