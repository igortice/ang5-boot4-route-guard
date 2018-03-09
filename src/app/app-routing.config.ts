import { CardapioComponent, HomeComponent, LoginComponent, NotFoundComponent, PagesComponent } from './pages';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cardapios', component: CardapioComponent },
  { path: '**', component: NotFoundComponent }
];

export const RoutedComponent = [
  PagesComponent,
  NotFoundComponent,
  HomeComponent,
  LoginComponent,
  CardapioComponent
];
