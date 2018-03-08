import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutNavbarComponent } from './layout/layout-navbar/layout-navbar.component';
import { LayoutDashboardComponent } from './layout/layout-dashboard/layout-dashboard.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutNavbarComponent,
    LayoutDashboardComponent,
    LayoutMainComponent,
    PagesComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    CardapioComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
