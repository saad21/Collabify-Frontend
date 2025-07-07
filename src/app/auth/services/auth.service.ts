

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDto } from '../models/login.dto';
import { SignupDto } from '../models/signup.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  login(data: LoginDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  signup(data: SignupDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }
}
