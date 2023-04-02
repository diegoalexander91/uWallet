import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@(uniminuto\.edu|uniminuto\.edu\.co)$/),
      Validators.minLength(4),
      Validators.maxLength(39)
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(5),
    ]],
  });

  ingresar: string = 'Acceder';

  constructor(private fb: FormBuilder) {
  }
  get errorCorreo(): string {
    const errors = this.loginForm.get('email')?.errors;
    if (errors?.["required"]) {
      return "Este campo no debe estar vacío."
    } else if (errors?.["pattern"]) {
      return "El correo debe ser de Uniminuto y terminar en .edu o .edu.co"
    }
    return "Por favor escriba un correo válido."
  };
  get errorPass(): string {
    const errors = this.loginForm.get('password')?.errors;
    if (errors?.["required"]) {
      return "El campo contraseña es obligatorio,"
    }
    else if (errors?.["minlength"]) {
      return "La contraseña es demasiado corta."
    }
    return ""
  };
  validacion(campo: string) {
    return this.loginForm.get(campo)?.invalid
      && this.loginForm.get(campo)?.touched;
  }

  onSubmit() {
    console.log('alerta');
  }
}
