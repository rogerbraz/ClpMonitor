import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private primengConfig: PrimeNGConfig,
    private authService: AuthService,
    private router: Router // Adicione esta linha

  ) { }

  ngOnInit() {
    // Configurar o efeito de ondulação do PrimeNG
    this.primengConfig.ripple = true;
  }
  
  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      // Armazenar o token JWT no localStorage ou sessionStorage
      const token = response.token;
      localStorage.setItem('token', token);
  
      // Redirecionar para a página principal
      this.router.navigate(['/dashboard']); // Supondo que 'router' seja o objeto do Angular Router
    });
  }
}
