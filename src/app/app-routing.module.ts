import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent, LayoutDashboardComponent, LayoutMainComponent, LayoutNavbarComponent } from './layout';
import { ROUTES } from './app-routing.config';


@NgModule({
  imports: [ RouterModule.forRoot(ROUTES, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

export const LayoutCompoment = [
  LayoutComponent,
  LayoutNavbarComponent,
  LayoutDashboardComponent,
  LayoutMainComponent
];
