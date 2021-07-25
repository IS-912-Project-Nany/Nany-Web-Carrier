import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html'
})
export class DetalleOrdenComponent implements OnInit {
  detalleOrden:any = [
    {
      nombreArticulo:'Tenis de colores',
      descripcion:'Zapato marca Nike, color: Rojo, numero EUR38, USA 8',
      cantidad:'1 unidad',
      precio:'Lps. 1,000',
      categoria:"Zapatos",
      empresa:'Payless',
      imgOrden:'zapatillas.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
