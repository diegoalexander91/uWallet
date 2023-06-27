import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-dashboard',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponentDashBoard {
  public year: number = new Date().getFullYear();
}
