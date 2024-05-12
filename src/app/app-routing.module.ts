//import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
//import { KursyWalutComponent } from './kursy-walut/kursy-walut.component';
///import { LogowanieComponent } from './logowanie/logowanie.component';

//const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: 'login', component: LogowanieComponent },
 // { path: 'kursy-walut', component: KursyWalutComponent }
//];

//@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
//})
//export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { KursyWalutComponent } from './kursy-walut/kursy-walut.component';

const routes: Routes = [
  { path: 'login', component: LogowanieComponent },
  { path: 'kursy-walut', component: KursyWalutComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
