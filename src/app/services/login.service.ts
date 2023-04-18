import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, tap } from 'rxjs';

import { environment } from '../../environments/environment';
import { Auth } from '../components/login.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = environment.URLAuth;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<Auth> {
    const data = { email, password };
    return this.http.post<Auth>(`${this.baseUrl}/`, data).pipe(
      tap((respuesta) => {
        if (respuesta.ok) {
          localStorage.setItem('token', respuesta.token ?? ''); // Si null se envía un dato vacío
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'x-token': token ?? '' })
    };
    return this.http.get<boolean>(`${this.baseUrl}/validarToken`, httpOptions);
    // return of(true);
  }

}