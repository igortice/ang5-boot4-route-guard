import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutNavbarComponent } from './layout/layout-navbar/layout-navbar.component';
import { LayoutDashboardComponent } from './layout/layout-dashboard/layout-dashboard.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutNavbarComponent,
    LayoutDashboardComponent,
    LayoutMainComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
