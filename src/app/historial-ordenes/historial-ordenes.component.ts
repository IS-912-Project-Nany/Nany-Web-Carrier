import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-historial-ordenes',
  templateUrl: './historial-ordenes.component.html'
})
export class HistorialOrdenesComponent implements OnInit {
  historialOrdenes:any = [];
  idUsuario: any  = this.cookiesService.get('nanyUsuarioId');

  constructor(
    private usuariosService: UsuariosService,
    private cookiesService: CookieService
  ) { }

  ngOnInit(): void {
    this.usuariosService.obtenerOrdenesUsuario(this.idUsuario).subscribe(
      result=>{
        for (let i = 0; i < result.ordenes.length; i++) {
          if (result.ordenes[i].tipoEstado.idEstado == "4") {
            this.historialOrdenes.push(result.ordenes[i]);
            console.log('Historial', this.historialOrdenes);
          } 
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

}
