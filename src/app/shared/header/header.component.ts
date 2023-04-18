import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // Evento para escuchar el scroll de la pantalla y en base a ello disminuir el tamaño del header.
  // 
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.querySelector('.header');
    console.log('Header scroll');
    if (header) {
      if (window.pageYOffset > 0) {
        header.classList.add('small');
      } else {
        header.classList.remove('small');
      }
    }
  }

}
