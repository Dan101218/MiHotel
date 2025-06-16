// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecursosComponent } from './ms-recursos/recursos.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'recursos', component: RecursosComponent }
];
