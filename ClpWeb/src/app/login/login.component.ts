import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';

  constructor(
    // private primengConfig: PrimeNGConfig,
    // private authService: AuthService,
    private router: Router // Adicione esta linha

  ) { }

  ngOnInit() {
    // Configurar o efeito de ondulação do PrimeNG
    // this.primengConfig.ripple = true;
  }
  
  login() {
    // this.authService.login(this.username, this.password).subscribe(response => {
    //   // Armazenar o token JWT no localStorage ou sessionStorage
    //   const token = response.token;
    //   localStorage.setItem('token', token);
  
    //   // Redirecionar para a página principal
    // });
    //   
    this.router.navigate(['/home']); // Supondo que 'router' seja o objeto do Angular Router
  }
}
