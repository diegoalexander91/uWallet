import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/components/login.interface';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent {
  public isMenuOpen = false;
  @Input() usuario!: Usuario; //  ******** Cambiar esto **********
  foto!: string;
  nombre!: string;
  correo!: string;
  cn!: string;
  // constructor(private _umd: UniminutoService) { }

  ngOnInit() {
    // this.foto = 'https://pix.uniminuto.edu/pix/' + parseInt(this.usuario.Cn!, 10) + '.JPG';
    // this.nombre = this.usuario.FirstName + ' ' + this.usuario.LastName;
    // this.correo = this.usuario.Mail + "";
    // this.cn = this.usuario.Cn + "";
    console.log(this.usuario);
  }

  cerrarSesion() {
    // this._umd.logout();
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
