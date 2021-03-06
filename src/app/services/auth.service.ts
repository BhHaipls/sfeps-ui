import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, first } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public currentUser: any = null;

  constructor(private http: HttpClient, private router: Router) { }

  login(userData: { username: string; password: string; }) {
    return this.http
      .post(`auth/login`, userData)
      .pipe(
        tap((data) => {
          this.currentUser = data;
        })
      );
  }

  logout() {
    return this.http
      .get('auth/logout')
      .pipe(
        tap(() => {
          this.currentUser = null;
        })
      );
  }
  getCurrentUser() {
    if (this.currentUser) {
      return of(this.currentUser)
        .pipe(
          first()
        );
    }
    return this.http
      .get('login/isLogged')
      .pipe(
        tap((data: any) => {
          if (data && data.response === 'non logged') {
            this.currentUser = null;
            this.router.navigate(['login']);

            return;
          }
          this.currentUser = data;
        })
      );
  }
}
