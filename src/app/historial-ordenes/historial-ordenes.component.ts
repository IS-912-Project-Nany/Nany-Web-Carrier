import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsuariosService } from '../services/usuarios.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-historial-ordenes',
  templateUrl: './historial-ordenes.component.html'
})
export class HistorialOrdenesComponent implements OnInit {
  historialOrdenes:any = [];
  ordenDetalle: any = '';
  factura: any = '';
  isLoading: boolean = false;
  idUsuario: any  = this.cookiesService.get('nanyUsuarioId');

  constructor(
    private usuariosService: UsuariosService,
    private cookiesService: CookieService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.isLoading = true;
    this.usuariosService.obtenerOrdenesUsuario(this.idUsuario).subscribe(
      result=>{
        for (let i = 0; i < result.ordenes.length; i++) {
          if (result.ordenes[i].tipoEstado.idEstado == "4") {
            this.historialOrdenes.push(result.ordenes[i]);
            this.historialOrdenes.sort((a, b) => {
              a = new Date(a.fecha);
              b = new Date(b.fecha);
              return a > b ? -1 : a < b ? 1 : 0;
            });
            console.log('Historial', this.historialOrdenes);
            this.isLoading = false;
          } 
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

  verDetalleOrden(index){
    this.ordenDetalle = this.historialOrdenes[index].detalleProductos;
    this.factura = this.historialOrdenes[index].factura;
  }

}
