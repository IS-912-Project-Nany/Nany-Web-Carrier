import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenesService } from '../services/ordenes.service';
import { CookieService } from 'ngx-cookie-service';
import { UsuariosService } from '../services/usuarios.service';
import Swal from 'sweetalert2';
import { MapComponent } from '../map/map.component';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html'
})
export class DetalleOrdenComponent implements OnInit {
  @ViewChild ('ubicacion') mapaComponent: MapComponent;

  region: Boolean = true;
  idOrden: any = '';
  detalleOrden:any = '';
  ordenesUsuario: any = [];
  latitud: any = '';
  longitud : any = '';
  isLoading: boolean = false;
  estadoOrden: any = '';
  idUsuario: any  = this.cookiesService.get('nanyUsuarioId');

  constructor(
    private _route: Router,
    private ruta: ActivatedRoute,
    private ordenesService: OrdenesService,
    private cookiesService: CookieService,
    private usuariosService: UsuariosService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.isLoading = true;
    this.scrollToTop();
    this.ruta.params.subscribe(
      params => {
        this.idOrden = params._id;
      }
    )
    this.ordenesService.obtenerOrden(this.idOrden).subscribe(
      result=>{
        this.detalleOrden = result;
        this.mapaComponent.initMap(this.detalleOrden.ubicacionOrden.latitud, this.detalleOrden.ubicacionOrden.longitud);
        console.log(this.detalleOrden);
        this.estadoOrden = this.detalleOrden.tipoEstado.idEstado;
        this.isLoading = false;
      },
      error=>{
        console.log(error);
      }
    )
    
    this.usuariosService.obtenerOrdenesUsuario(this.idUsuario).subscribe(
      result=>{
        this.ordenesUsuario = result.ordenes;
        console.log(this.ordenesUsuario);
      },
      error=>{
        console.log(error);
      }
    )
    
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  tomarOrden(){
    let entrega = 0;
    for (let i = 0; i < this.ordenesUsuario.length; i++) {
      if (this.ordenesUsuario[i].tipoEstado.idEstado != "4") {
        entrega++;
      }
    }

    if (entrega != 0) {
      Swal.fire({
        icon: 'error',
        title: 'Tienes ordenes por entregar!',
        text: 'No puedes tomar mas de una orden a la vez'
      });
    } else {
      this.detalleOrden.tipoEstado = {
        idEstado: "1",
        nombreEstado: "En camino"
      };
  
      this.detalleOrden.motorista = {
        _id: this.cookiesService.get('nanyUsuarioId'),
        nombre: this.cookiesService.get('nanyUsuarioNombre'),
        apellido: this.cookiesService.get('nanyUsuarioApellido')
      };
  
      this.ordenesService.actualizarOrden(this.idOrden, this.detalleOrden).subscribe(
        result=>{
          console.log(result);
          this._route.navigate(['/Home']);
        },
        error=>{
          console.log(error);
        }
      )
    }
  }

  latlong(latlong){
    console.log(latlong);
    this.latitud = latlong.lat;
    this.longitud = latlong.lng;
  }
}
