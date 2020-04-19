import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat: number = 18.5;
  lng: number= 73.9;
  zoom: number = 15;

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
    map: google.maps.Map;
    coordinates = new google.maps.LatLng(this.lat, this.lng);
    mapOptions: google.maps.MapOptions = {
      center: this.coordinates,
      zoom: 10,
    };

    marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });
  constructor() { 
    if (navigator){
      navigator.geolocation.getCurrentPosition( pos => {
        console.log(pos);
        this.lng = pos.coords.longitude;
        this.lat = pos.coords.latitude;
        this.zoom = 15;
      });
    }
  }

  ngOnInit() {
  }

   ngAfterViewInit() {
    this.mapInitializer();
   }

   mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
   }

}
