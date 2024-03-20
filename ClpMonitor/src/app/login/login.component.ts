import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string = '';
  username: string = '';
  constructor() {
    this.password = '';
    this.username = '';
  }

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
