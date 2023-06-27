import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem, SubMenuItem } from 'src/app/pages/dashboard/models/menu.models';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar-mobile-menu',
  templateUrl: './navbar-mobile-menu.component.html',
  styleUrls: ['./navbar-mobile-menu.component.css']
})
export class NavbarMobileMenuComponent {
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public showSideBar$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
    console.log(this.pagesMenu$);
  }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  public closeMenu() {
    this.menuService.showMobileMenu = false;
  }
}
