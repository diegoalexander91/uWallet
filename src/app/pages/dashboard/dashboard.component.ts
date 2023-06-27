import { Component } from '@angular/core';
import { DataInstitucional } from './models/data';
// import { Usuario } from './models/menu.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  datos: Array<DataInstitucional>;
  constructor() {

    // this.datos = history.state.data;
    this.datos = [
      {
        id: 34356771,
        title: 'Girls of the Cartoon Universe',
        creator: 'Jhon Doe',
        instant_price: 4.2,
        price: 187.47,
        ending_in: '06h 52m 47s',
        last_bid: 0.12,
        image: './assets/images/img-01.jpg',
        avatar: './assets/avatars/avt-01.jpg',
      },
      {
        id: 34356772,
        title: 'Pupaks',
        price: 548.79,
        last_bid: 0.35,
        image: './assets/images/img-02.jpg',
      },
      {
        id: 34356773,
        title: 'Seeing Green collection',
        price: 234.88,
        last_bid: 0.15,
        image: './assets/images/img-03.jpg',
      },
    ];
  }
}
