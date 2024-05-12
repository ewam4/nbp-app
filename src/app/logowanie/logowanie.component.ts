import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]  // Dodanie RouterModule
})
export class LogowanieComponent {
  formData = { username: '', password: '' };
  loginError = false;

  constructor(private router: Router) {}

  logowanie() {
    if (this.formData.username === 'admin' && this.formData.password === 'admin123') {
      console.log("Warunki spełnione, nawigacja do /kursy-walut");
      this.router.navigate(['/kursy-walut']);
    } else {
      this.loginError = true;
      console.log("błąd logowania");
    }
  }
}
