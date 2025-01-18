import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './core/layouts/side-bar/side-bar.component';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly _authService: AuthService = inject(AuthService);

  isLoggedIn(): boolean {
    return this._authService.isAuthenticatedUser();
  }
}
