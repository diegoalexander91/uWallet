import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
// import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    // LoginComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    PagesRoutingModule
    // AppRoutingModule
  ],
  exports: [
    // LoginComponent
  ]
})
export class PagesModule { }
