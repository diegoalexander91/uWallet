import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { SharedRoutingModule } from './shared-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarMobileComponent } from './navbar/navbar-mobile/navbar-mobile.component';
import { NavbarMobileMenuComponent } from './navbar/navbar-mobile/navbar-mobile-menu/navbar-mobile-menu.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    NavbarMobileComponent,
    NavbarMobileMenuComponent,
    PageNotFoundComponentComponent,
    SidebarMenuComponent,
    ProfileMenuComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponentComponent
  ]
})
export class SharedModule { }
