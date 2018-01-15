import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import 'cesium/Build/Cesium/Cesium.js';
import {OfficeLocation} from '../office.location';
import {DeveloperService} from '../developer.service';
import { ActivatedRoute } from '@angular/router';
import {Developer} from '../developr';


@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.scss']
  // styleUrls: ['../../assets/Cesium_tmp/Widgets/CesiumWidget/CesiumWidget.css']
})
export class CesiumComponent implements OnInit, AfterViewInit {
  developer: Developer;
  location: OfficeLocation;
  @ViewChild('cesiumContainer') cesiumContainer: ElementRef;
  cesiumViewer: any;
  entity: any;
  pinBuilder = new Cesium.PinBuilder();

  constructor(private developerService: DeveloperService, private route: ActivatedRoute) {
    Cesium.BingMapsApi.defaultKey = 'AroazdWsTmTcIx4ZE3SIicDXX00yEp9vuRZyn6pagjyjgS-VdRBfBNAVkvrucbqr';
    (<any>window).CESIUM_BASE_URL = '/assets/Cesium';
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.developerService.getDeveloper(id).subscribe(developer => this.developer = developer);
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
      animation: false,
      timeline: false,
      projectionPicker: false,
      geocoder: false,
      bottom: false
    });
    this.cesiumViewer.forceResize();
    // this.layers = this.cesiumViewer.scene.imageryLayers;
  }
  markLocation() {
    // Cesium.buildModuleUrl('../Assets/Cesium/Assets/Textures/maki/grocery.png');
    this.cesiumViewer.entities.add({
      name: 'test',
      position : Cesium.Cartesian3.fromDegrees(this.developer.location.longitude, this.developer.location.latitude),
      billboard : {
        image : this.pinBuilder.fromText(this.developer.name, Cesium.Color.BLACK, 90).toDataURL(),
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM
      }
    });
    this.flyTo();
  }
  flyTo() {
    this.cesiumViewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(this.developer.location.longitude, this.developer.location.latitude, 100000.0),
   });
  }
}
