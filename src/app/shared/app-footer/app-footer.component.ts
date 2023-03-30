import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  year!: number;

  ngOnInit(): void {
    const currentDate = new Date();
    this.year = currentDate.getFullYear();
  }
}
