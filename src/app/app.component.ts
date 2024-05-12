import { Component } from '@angular/core';
import { LogowanieComponent } from './logowanie/logowanie.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [LogowanieComponent]
})
export class AppComponent {
  // Logika komponentu
}
