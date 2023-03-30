import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduEmailDirective } from './edu-email.directive';



@NgModule({
  declarations: [
    EduEmailDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EduEmailDirective,
  ],
})
export class PersonalizadasModule { }
