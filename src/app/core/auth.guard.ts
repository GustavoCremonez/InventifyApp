import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    if (this._authService.isAuthenticatedUser()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
