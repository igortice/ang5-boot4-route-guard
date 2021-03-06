import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, LayoutCompoment } from './app-routing.module';

import { AppComponent } from './app.component';
import { RoutedComponent } from './app-routing.config';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LayoutCompoment,
    RoutedComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
