import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/pages/dashboard/models/menu.models';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public appJson: any = {
    displayName: 'uWallet Web',
    version: '1.0'
  };

  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }


  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
