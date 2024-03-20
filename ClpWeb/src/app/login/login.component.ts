import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Inicialização direta na declaração
  password: string = ''; // Inicialização direta na declaração

  constructor() {
    // Ou inicialização no construtor
    // this.username = '';
    // this.password = '';
  }

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Adicione sua lógica de autenticação aqui
  }
}
