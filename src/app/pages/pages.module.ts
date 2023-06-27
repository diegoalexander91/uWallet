import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../guards/auth.guard';
import { HeaderComponent } from './dashboard/shared/header/header.component';
import { AuctionsTableComponent } from './dashboard/components/auctions-table/auctions-table.component';
import { DualCardComponent } from './dashboard/components/dual-card/dual-card.component';
import { SingleCardComponent } from './dashboard/components/single-card/single-card.component';
import { ChartCardComponent } from './dashboard/components/chart-card/chart-card.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { LayoutComponent } from './layout/layout.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FooterComponentDashBoard } from './dashboard/shared/footer/footer.component';


@NgModule({
  declarations: [
    // LoginComponent,
    DashboardComponent,
    FooterComponentDashBoard,
    LoginComponent,
    HeaderComponent,
    AuctionsTableComponent,
    DualCardComponent,
    SingleCardComponent,
    ChartCardComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    PagesRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    AngularSvgIconModule.forRoot()
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
