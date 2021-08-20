import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { CiudadesService } from '../services/ciudades.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    nombre: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    apellido: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    correo: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.passwordPattern),
    ]),
    ciudad: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    dni: new FormControl('', [
      Validators.required,
      Validators.pattern(this.dniPattern),
    ]),
    genero: new FormControl('', [Validators.required]),
    motocicleta: new FormControl('', [Validators.required]),
    licencia: new FormControl('', [Validators.required]),
    datosMoviles: new FormControl('', [Validators.required]),
    experiencia: new FormControl('', [Validators.required]),
  });
  confirmarPassword = new FormControl('',[Validators.required]);
  responseRegistro: any = '';
  ciudades: any = []
  experiencias = [
    { idExperiencia: 1, experiencia:"Un año"},
    { idExperiencia: 2, experiencia:"Dos años"},
    { idExperiencia: 3, experiencia:"Tres años"},
    { idExperiencia: 4, experiencia:"No tengo experiencia"},
  ]

  constructor(
    private usuariosService: UsuariosService,
    private ciudadesService: CiudadesService,
    private _route:Router
  ) {}

  ngOnInit(): void {
    this.ciudadesService.obtenerCiudades().subscribe(
      result=>{
        this.ciudades = result;
      },
      error=>{
        console.log(error);
      }
    )
  }

  registrar() {
    let ciudadSeleccionada: any = {};
    this.ciudades.forEach(ciudad => {
      if(this.formRegister.value.ciudad == ciudad.idCiudad){
        ciudadSeleccionada.idCiudad = this.formRegister.value.ciudad;
        ciudadSeleccionada.ciudad = ciudad.ciudad;
      }
    });

    let experienciaSeleccionada: any = {};
    this.experiencias.forEach(exp => {
      if(this.formRegister.value.experiencia == exp.idExperiencia){
        experienciaSeleccionada.idExperiencia = this.formRegister.value.experiencia;
        experienciaSeleccionada.experiencia = exp.experiencia;
      }
    });

    let nuevoMotorista = {
      nombre: this.formRegister.value.nombre,
      apellido: this.formRegister.value.apellido,
      correo: this.formRegister.value.correo,
      password: this.formRegister.value.password,
      ciudad: ciudadSeleccionada,
      fechaNacimiento: this.formRegister.value.fechaNacimiento,
      genero: this.formRegister.value.genero,
      tipoUsuario: { 
        motoristaInfo:{
          dni: this.formRegister.value.dni,
          motocicleta: this.formRegister.value.motocicleta,
          licencia: this.formRegister.value.licencia,
          datosMoviles: this.formRegister.value.datosMoviles,
          experiencia: experienciaSeleccionada,
          estadoAdmision: false
        },
        idUsuario: 2, 
        tipo: "motorista"
      },
      ordenes: []
    }
    console.log("Se registrara el motorista:", nuevoMotorista);

    this.usuariosService.registrar(nuevoMotorista).subscribe(
      result=>{
        if (result.code == 0) {
          this.responseRegistro = result;
          this.correo.setValue('');
        } else {
          console.log(result);
          Swal.fire({
            icon: 'success',
            title: 'Tu registro ha sido exitoso!',
            text: 'Te avisaremos al correo cuando tu solicitud sea aceptada',
          });
          this._route.navigate(['/']);
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

  get nombre() {
    return this.formRegister.get('nombre');
  }

  get apellido() {
    return this.formRegister.get('apellido');
  }

  get correo() {
    return this.formRegister.get('correo');
  }

  get password() {
    return this.formRegister.get('password');
  }

  get ciudad() {
    return this.formRegister.get('ciudad');
  }

  get fechaNacimiento() {
    return this.formRegister.get('fechaNacimiento');
  }

  get dni() {
    return this.formRegister.get('dni');
  }

  get genero(){
    return this.formRegister.get('genero');
  }

  get datosMoviles(){
    return this.formRegister.get('datosMoviles');
  }

  get licencia(){
    return this.formRegister.get('licencia');
  }

  get motocicleta(){
    return this.formRegister.get('motocicleta');
  }

  get experiencia() {
    return this.formRegister.get('experiencia');
  }
}
