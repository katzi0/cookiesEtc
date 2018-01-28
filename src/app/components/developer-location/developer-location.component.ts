import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


import {DeveloperService} from '../../services/developer.service';
import {Developer} from '../../models/developr.model';
import {CesiumComponent} from '../cesium/cesium.component';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-developer-location',
  templateUrl: './developer-location.component.html',
  styleUrls: ['./developer-location.component.scss']
})
export class DeveloperLocationComponent implements OnInit, OnDestroy {
  @ViewChild('cesiumContainer', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<any>;
  developer: Developer;
  unsubsbcribe: Subject<any> = new Subject<any>();

  constructor(private route: ActivatedRoute,
              private developerService: DeveloperService,
              private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.developerService.getDeveloper(id)
      .pipe(takeUntil(this.unsubsbcribe))
      .subscribe(developer => this.developer = developer);
    this.createCesiumMapComponent();
  }
  createCesiumMapComponent() {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(CesiumComponent);
    this.componentRef = this.container.createComponent(factory);
  }
  ngOnDestroy() {
    this.unsubsbcribe.next();
    this.unsubsbcribe.complete();
    this.unsubsbcribe.unsubscribe();
    this.container = null;
  }
}
