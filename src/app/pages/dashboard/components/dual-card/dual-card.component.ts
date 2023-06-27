import { Component, Input } from '@angular/core';
import { DataInstitucional } from '../../models/data';


@Component({
  selector: '[dual-card]',
  templateUrl: './dual-card.component.html',
})
export class DualCardComponent {
  @Input() datos: DataInstitucional = <DataInstitucional>{};

}
