import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-login',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  passwordIcon = 'eye';
  passwordType = 'password';

  togglePasswordVisibility() {
    this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
