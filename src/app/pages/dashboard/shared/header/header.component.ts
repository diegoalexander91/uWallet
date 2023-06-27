import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/components/login.interface';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menu: boolean = false;
  @Input() usuario!: Usuario; //  ******** Cambiar esto **********
  cambioMenu() {
    this.menu = !this.menu;
  }
}
