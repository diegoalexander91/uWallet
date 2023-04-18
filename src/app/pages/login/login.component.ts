import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ingresar: string = 'Acceder';
  isLoading: boolean = false;

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
    politica: [true, [Validators.requiredTrue]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {
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

  get politica(): string {
    const errors = this.loginForm.get('politica')?.errors;
    // console.log(this.loginForm.controls['politica']);

    if (errors?.["required"]) {
      return "Para continuar debes aceptar la política de tratamiento de datos.";
    }
    return "";

  }
  validacion(campo: string) {
    return this.loginForm.get(campo)?.invalid
      && this.loginForm.get(campo)?.touched;
  }

  onSubmit() {
    this.isLoading = true;
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(email, password)
      .subscribe(data => {
        console.log(data);
        if (data.ok) {
          this.isLoading = false;
          this.router.navigate(['dashboard/home']); // Redirige al usuario a la ruta home
        }
      });

    // this.authService.login(this.authService.login(email, password));
    // this.router.navigate(['dashboard/home']);
  }
}
