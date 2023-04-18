import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../guards/auth.guard';
import { HeaderComponent } from './dashboard/shared/header/header.component';
import { FooterComponent } from './dashboard/shared/footer/footer.component';
// import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    // LoginComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    PagesRoutingModule,
    HttpClientModule
    // AppRoutingModule
  ],
  exports: [
    // LoginComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class PagesModule { }
