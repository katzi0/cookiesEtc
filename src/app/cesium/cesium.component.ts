import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import 'cesium/Build/Cesium/Cesium.js';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.scss']
})
export class CesiumComponent implements OnInit, AfterViewInit {
  @ViewChild('cesiumContainer') cesiumContainer: ElementRef;
  cesiumViewer: any;

  constructor() {
    Cesium.BingMapsApi.defaultKey = 'AroazdWsTmTcIx4ZE3SIicDXX00yEp9vuRZyn6pagjyjgS-VdRBfBNAVkvrucbqr';
    (<any>window).CESIUM_BASE_URL = '/assets/Cesium';
  }

  ngOnInit() {
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
      navigationHelpButton: false
    });
  }

}
