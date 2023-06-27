import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  foto!: string;
  perfil: boolean = false;
  constructor(private menuService: MenuService) { }
  ngOnInit() {
    this.foto = 'https://pix.uniminuto.edu/pix/' + '96815' + '.JPG';
    // this.foto = 'https://pix.uniminuto.edu/pix/' + parseInt(this.usuario.Cn!, 10) + '.JPG';
    // console.log(this.usuario);
  }

  abrirPerfil(): void {
    this.perfil = !this.perfil;
  }

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }

}
