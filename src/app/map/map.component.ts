import { Component, AfterViewInit, Output, EventEmitter} from '@angular/core';
import * as L from 'leaflet';

import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements AfterViewInit {
  map: any;

  initMap(lat, long) {
    this.map = L.map('map', {
      center: [lat, long],
      zoom: 11.0,
    });
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
    let marker;
    marker = L.marker([lat, long], {
      draggable: false,
      bounceOnAdd: true,
      title: 'Llevar aquí',
    })
      .addTo(this.map)
      .bindPopup('Llevar aquí')
      .openPopup();
  }
  constructor() { }

  ngAfterViewInit() {
  }

}
