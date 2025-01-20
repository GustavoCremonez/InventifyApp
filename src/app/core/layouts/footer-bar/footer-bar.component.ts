import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer-bar',
  imports: [LucideAngularModule],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.scss',
})
export class FooterBarComponent {
  public year: number = new Date().getFullYear();
}
