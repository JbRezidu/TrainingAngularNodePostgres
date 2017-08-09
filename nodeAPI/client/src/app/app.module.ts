import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';

// Components
import { User } from './app.component';

// Services
import { UserService } from './services/user.service';

@NgModule({
    declarations: [
        User,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        UserService
    ],
    bootstrap: [User]
})
export class AppModule { }
