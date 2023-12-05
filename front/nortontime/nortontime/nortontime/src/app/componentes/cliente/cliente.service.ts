// Em seu serviço Angular (cliente.service.ts)
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'http://localhost:8081/clientes'; // Substitua conforme necessário

  constructor(private http: HttpClient) { }

  // Método de login
  login(email: string, senha: string): Observable<any> {
    const cliente = { email, senha };
    return this.http.post(`${this.baseUrl}/login`, cliente);
  }
}
