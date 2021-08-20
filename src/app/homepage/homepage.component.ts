import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { OrdenesService } from '../services/ordenes.service';
import { UsuariosService } from '../services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {
  ordenesDisponibles:any = [];
  ordenesTomadas:any = [];
  nombreUsuario: String = '';
  idUsuario: String = '';
  ordenProgreso: any = '';
  estadoOrden: any = '';
  ordenesEntregadas: any = [];
  indiceOrdenProgreso: Number;

  constructor(
    private ordenesService: OrdenesService,
    private _route:Router,
    private cookiesService: CookieService,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    if (this.cookiesService.check('nanyUsuarioNombre')) {
      this.nombreUsuario = this.cookiesService.get('nanyUsuarioNombre');
      this.idUsuario = this.cookiesService.get('nanyUsuarioId');

      this.ordenesService.obtenerOrdenes().subscribe(
        result=>{
          let index = -1;
          for (let i = 0; i < result.length; i++) {
  
            if (result[i].tipoEstado.idEstado == "0") {
              this.ordenesDisponibles.push(result[i]);
              console.log('Disponible',this.ordenesDisponibles);

            } else if (result[i].tipoEstado.idEstado == "4") {
              this.ordenesEntregadas.push(result[i]);
              console.log('Entregadas', this.ordenesEntregadas);

            } else {
              this.ordenesTomadas.push(result[i]);
              console.log('Tomada',this.ordenesTomadas);
              index++;
              
              if (this.idUsuario == result[i].motorista._id) {
                this.ordenProgreso = result[i];
                this.estadoOrden = this.ordenProgreso.tipoEstado.nombreEstado;
                this.indiceOrdenProgreso = index;
                console.log(this.ordenProgreso);
              } 
            }  
          }
        },
        error=>{
          console.log(error);
        }
      )
    } 
  } 

  enOrigen(){
    this.ordenProgreso.tipoEstado = {
      idEstado: "2",
      nombreEstado: "En origen"
    };

    this.usuariosService.actualizarEstadoOrden(this.ordenProgreso.cliente._id, this.ordenProgreso._id, this.ordenProgreso).subscribe(
      result=>{
        console.log(result);
        this.estadoOrden = this.ordenProgreso.tipoEstado.nombreEstado;
      },
      error=>{
        console.log(error);
      }
    )

  }

  enDestino(){
    this.ordenProgreso.tipoEstado = {
      idEstado: "3",
      nombreEstado: "En destino"
    };

    this.usuariosService.actualizarEstadoOrden(this.ordenProgreso.cliente._id, this.ordenProgreso._id, this.ordenProgreso).subscribe(
      result=>{
        console.log(result);
        this.estadoOrden = this.ordenProgreso.tipoEstado.nombreEstado;
      },
      error=>{
        console.log(error);
      }
    )
  }

  entregada(){
    this.ordenProgreso.tipoEstado = {
      idEstado: "4",
      nombreEstado: "Entregada"
    };

    this.usuariosService.actualizarEstadoOrden(this.ordenProgreso.cliente._id, this.ordenProgreso._id, this.ordenProgreso).subscribe(
      result=>{
        console.log(result);
        Swal.fire({
          icon: 'success',
          title: 'Excelente trabajo!',
          text: 'Has entregado la orden correctamente'
        });
        console.log(this.indiceOrdenProgreso);
        this.ordenesTomadas.splice(this.indiceOrdenProgreso, 1);
        this.ordenProgreso = '';
        console.log(this.ordenesTomadas);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
