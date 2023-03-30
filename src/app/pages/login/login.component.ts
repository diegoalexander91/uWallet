import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
  });

  constructor() {
    this.loginForm = new FormGroup({
      // inicializa loginForm con dos FormControl, username y password
      // password: new FormControl('', [Validators.required, EduEmailDirective.validate])
    });
  }

  ngOnInit(): void {

  }

}
