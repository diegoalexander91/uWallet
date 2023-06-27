import { Component, Input } from '@angular/core';
import { DataInstitucional } from '../../models/data';

@Component({
  selector: '[single-card]',
  templateUrl: './single-card.component.html',
})
export class SingleCardComponent {
  @Input() datos: DataInstitucional = <DataInstitucional>{};
}
