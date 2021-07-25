import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-ordenes',
  templateUrl: './historial-ordenes.component.html'
})
export class HistorialOrdenesComponent implements OnInit {
  historialOrdenes:any= [
    {
      destino:'Col. La Travesia',
      nombreComprador:'Melany Avila',
      totalFactura:'L. 990.00',
      comision:'Lps. 100',
      fecha: '08/09/2021'
    },
    {
      destino:'Col. San Miguel',
      nombreComprador:'Oscar Avila',
      totalFactura:'L. 990.00',
      comision:'Lps. 100',
      fecha: '05/07/2021'
    },
    {
      destino:'Villanueva',
      nombreComprador:'Carla Medina',
      totalFactura:'L. 990.00',
      comision:'Lps. 100',
      fecha: '22/06/2021'
    },
    {
      destino:'Col. Tiloarque',
      nombreComprador:'Carmen Medina',
      totalFactura:'L. 990.00',
      comision:'Lps. 90',
      fecha: '22/06/2021'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
