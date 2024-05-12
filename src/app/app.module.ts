import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { AppRoutingModule } from './app-routing.module';  // Upewnij się, że ścieżka do komponentu jest poprawna

@NgModule({
  declarations: [
    //LogowanieComponent  // Usunąłem AppComponent z deklaracji
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []  // Usunąłem AppComponent z bootstrap
})
export class AppModule { }

