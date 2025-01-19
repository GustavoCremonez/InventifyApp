import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-register',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  passwordIcon = 'eye';
  passwordType = 'password';

  confirmPasswordIcon = 'eye';
  confirmPasswordType = 'password';

  togglePasswordVisibility() {
    this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordIcon =
      this.confirmPasswordIcon === 'eye' ? 'eye-off' : 'eye';
    this.confirmPasswordType =
      this.confirmPasswordType === 'password' ? 'text' : 'password';
  }
}
