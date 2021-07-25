import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {
  ordenesDisponibles:any = [
    {
      destino:'Col. La Travesia',
      nombreComprador:'Marcos Torres',
      cantidad:'1 unidad',
      horaCompra:'05:40 pm',
      imgOrden:'zapatillas.png'
    },
    {
      destino:'Col. San Miguel',
      nombreComprador:'Martha Molina',
      cantidad:'1 unidad',
      horaCompra:'05:40 pm',
      imgOrden:'vestir.png'
    }
  ];

  ordenesTomadas:any = [
    {
      destino:'Col. Miraflores',
      nombreComprador:'Camilo Acosta',
      cantidad:'1 unidad',
      horaCompra:'04:30 pm',
      imgOrden:'juguetes.png'
    },
    {
      destino:'Col. Tiloarque',
      nombreComprador:'Molly Cruz',
      cantidad:'1 unidad',
      horaCompra:'04:30 pm',
      imgOrden:'juguetes.png'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
