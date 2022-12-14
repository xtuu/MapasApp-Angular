import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'



@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #mapa {
        width: 100%;
    height: 100%;
      }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-67.03201136408785, 10.600235811602637],
      zoom: 15
    });


  }

}
