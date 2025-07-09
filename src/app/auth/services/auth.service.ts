

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginDto } from '../models/login.dto';
import { SignupDto } from '../models/signup.dto';
import { TokenService } from '../../core/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(credentials: LoginDto): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials).pipe(
      tap(response => {
        this.tokenService.setToken(response.accessToken);
      })
    );
  }

  signup(data: SignupDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }
}
