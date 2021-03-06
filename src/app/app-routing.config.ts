import {
  CardapioComponent,
  CardapioEditComponent,
  CardapioListComponent,
  CardapioNewComponent,
  HomeComponent,
  LoginComponent,
  NotFoundComponent,
  PagesComponent
} from './pages';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path:      'cardapios',
    component: CardapioComponent,
    children:  [
      { path: '', component: CardapioListComponent },
      { path: ':id/edit', component: CardapioEditComponent },
      { path: 'new', component: CardapioNewComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

export const RoutedComponent = [
  PagesComponent,
  NotFoundComponent,
  HomeComponent,
  LoginComponent,
  CardapioComponent,
  CardapioNewComponent,
  CardapioListComponent,
  CardapioEditComponent
];
