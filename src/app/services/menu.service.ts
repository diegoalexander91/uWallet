import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MenuItem } from '../pages/dashboard/models/menu.models';
import { Router } from '@angular/router';
import { Menu } from '../components/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnDestroy {
  private _showSidebar$ = new BehaviorSubject<boolean>(true);
  private _showMobileMenu$ = new BehaviorSubject<boolean>(false);
  public _pagesMenu$ = new BehaviorSubject<MenuItem[]>([]);
  private subscription = new Subscription();

  constructor(private router: Router) {
    this._pagesMenu$.next(Menu.pages);
  }
  set showMobileMenu(value: boolean) {
    this._showMobileMenu$.next(value);
  }
  get showMobileMenu$() {
    return this._showMobileMenu$.asObservable();
  }

  set showSideBar(value: boolean) {
    this._showSidebar$.next(value);
  }
  get showSideBar$() {
    return this._showSidebar$.asObservable();
  }
  get pagesMenu$() {
    return this._pagesMenu$.asObservable();
  }

  public toggleMenu(menu: any) {
    this.showSideBar = true;
    menu.expanded = !menu.expanded;
  }

  public toggleSidebar() {
    this._showSidebar$.next(!this._showSidebar$.value);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
