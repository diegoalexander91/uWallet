import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$";
  constructor() { }

  emailUniminuto(correo: FormControl): ValidationErrors | null {
    console.log(correo.value);
    return { error: true }
  }
}
