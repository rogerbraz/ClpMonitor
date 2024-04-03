import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private apiUrl = 'http://localhost:8080/auth'; // URL do seu backend para autenticação

  // constructor(private http: HttpClient) { }

  // login(username: string, password: string): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  // }

  // logout(): void {
  //   // Implemente a lógica de logout aqui, se necessário
  // }

  // Outros métodos relacionados à autenticação podem ser adicionados aqui
}
