import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  emailPattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$.!%?&]){8,}$/;
  dniPattern = /[0-1][0-9][0-2][0-9]-[1,2][0,9][0-9][0-9]-[0-9]{5}/g;

  formRegister = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.passwordPattern),
    ]),
    city: new FormControl('', [Validators.required]),
    birthdayDate: new FormControl('', [Validators.required]),
    dni: new FormControl('', [
      Validators.required,
      Validators.pattern(this.dniPattern),
    ]),
    gender: new FormControl('', [Validators.required]),
    motorcycle: new FormControl('', [Validators.required]),
    license: new FormControl('', [Validators.required]),
    mobileData: new FormControl('', [Validators.required]),
    experience: new FormControl('', [Validators.required]),
  });
  confirmPassword = new FormControl('',[Validators.required]);

  constructor() {}

  ngOnInit(): void {}

  register() {
    console.log(this.formRegister);
  }

  get name() {
    return this.formRegister.get('name');
  }

  get lastName() {
    return this.formRegister.get('lastName');
  }

  get email() {
    return this.formRegister.get('email');
  }

  get password() {
    return this.formRegister.get('password');
  }

  get city() {
    return this.formRegister.get('city');
  }

  get birthdayDate() {
    return this.formRegister.get('birthdayDate');
  }

  get dni() {
    return this.formRegister.get('dni');
  }
}
