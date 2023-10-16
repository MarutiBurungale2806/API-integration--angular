// auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth/login';
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}`, credentials);
  }

  logout() {
    return this.http.get(`${this.apiUrl}/logout`);
  }

  // Check token validity on page refresh
  checkTokenValidity() {
    const token = localStorage.getItem(this.tokenKey);

    if (!token) {
      // Token doesn't exist; user is not authenticated.
      return false;
    }

    // Send the token to the server for validation.
    return this.http.post(`${this.apiUrl}/validate-token`, { token });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }
}
