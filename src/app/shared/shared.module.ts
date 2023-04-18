import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFooterComponent } from './app-footer/app-footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
    AppFooterComponent,
    HeaderComponent,
    NavbarComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    AppFooterComponent,
    HeaderComponent,
    NavbarComponent,
    PageNotFoundComponentComponent
  ]
})
export class SharedModule { }
