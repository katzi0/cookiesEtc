import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import 'cesium/Build/Cesium/Cesium.js';
import {OfficeLocation, Rectangle} from '../office.location';
import {DeveloperService} from '../developer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.scss']
})
export class CesiumComponent implements OnInit, AfterViewInit {
  location: OfficeLocation;
  @ViewChild('cesiumContainer') cesiumContainer: ElementRef;
  cesiumViewer: any;
  layers: any;
  rectangle: Rectangle = {
    west: 1,
    north: 1,
    east: 1,
    south:1
  };

  constructor(private developerService: DeveloperService, private route: ActivatedRoute) {
    Cesium.BingMapsApi.defaultKey = 'AroazdWsTmTcIx4ZE3SIicDXX00yEp9vuRZyn6pagjyjgS-VdRBfBNAVkvrucbqr';
    (<any>window).CESIUM_BASE_URL = '/assets/Cesium';
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.developerService.getDeveloper(id).subscribe(developer => this.location = developer.location);
  }

  ngAfterViewInit() {
    this.cesiumViewer = new Cesium.Viewer(this.cesiumContainer.nativeElement, {
      fullscreenButton: false,
      baseLayerPicker: false,
      vrButton: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: false,
      navigationHelpButton: false,
      animation: false
    });
    this.layers = this.cesiumViewer.scene.imageryLayers;
  }
  flyTo() {
    this.calculateRectangle();
    this.markUserLocation();
    this.cesiumViewer.camera.flyTo({
     destination : Cesium.Rectangle.fromDegrees( this.rectangle.west, this.rectangle.south, this.rectangle.east, this.rectangle.north)
   });
  }
  markUserLocation() {
    this.layers.addImageryProvider(new Cesium.SingleTileImageryProvider({
      url : '../assets/images/person-icon.png',
      rectangle : Cesium.Rectangle.fromDegrees( this.rectangle.west, this.rectangle.south, this.rectangle.east, this.rectangle.north)
    }));
  }

  calculateRectangle() {
    this.rectangle.west = this.location.longitude;
    this.rectangle.south = this.location.latitude;
    this.rectangle.east = this.rectangle.west - 5;
    this.rectangle.north = this.rectangle.south - 5;
  }

}
