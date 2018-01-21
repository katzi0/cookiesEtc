import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeveloperDetailComponent} from './developer-detail.component';
import {DebugElement} from '@angular/core';
import {DeveloperService} from '../../services/developer.service';
import {Developer} from '../../models/developr.model';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {WeatherWidgetComponent} from '../weather-widget/weather-widget.component';
import {DeveloperLocationComponent} from '../developer-location/developer-location.component';
import {CesiumComponent} from '../cesium/cesium.component';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {DEVELOPERS} from '../../mocks/mock-developers';
import {RouterTestingModule} from '@angular/router/testing';
import {MesseagesService} from '../../services/messeages.service';


class DeveloperServiceStub {
  getDevelopers() {
    return of(DEVELOPERS);
  }
}


describe('DeveloperDetailComponent', () => {
  let component: DeveloperDetailComponent;
  let fixture: ComponentFixture<DeveloperDetailComponent>;

  let developerServiceStub;

  let developerService: DeveloperServiceStub;
  let developersList = null;

  beforeEach(async(() => {
    developerServiceStub = {
      user: {name: 'Test User'},
      getDevelopers() {
        developersList = DEVELOPERS;
      }
    };


    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [DeveloperDetailComponent, WeatherWidgetComponent, DeveloperLocationComponent, CesiumComponent],
      providers: [
        {provide: DeveloperService, useClass: DeveloperServiceStub},
        { provide: ActivatedRoute, useValue: RouterStub},
        MesseagesService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(DeveloperDetailComponent);
    component = fixture.componentInstance;

    developerService = TestBed.get(DeveloperService);

    // de = fixture.debugElement.query(By.css('h2'));
    // el = de.nativeElement;

    spyOn(developerService,'getDevelopers');//.and.callThrough();
    developerService.getDevelopers();
    // fixture.detectChanges();


  });
  // it('should show user first name', () => {
  //   fixture.detectChanges();
  //   const content = el.textContent;
  //   expect(content).toContain('Welcome', '"Welcome ..."');
  //   // expect(el.textContent).toContain('Test User');
  // });
  it('should invoke getDevelopers func', () => {
    expect(true).toBe(true);
    expect(developerService.getDevelopers).toHaveBeenCalled();
  });
});

describe('check for user auth', () => {
  let component: DeveloperDetailComponent;
  let fixture: ComponentFixture<DeveloperDetailComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [DeveloperDetailComponent, WeatherWidgetComponent, DeveloperLocationComponent, CesiumComponent],
      providers: [
        {provide: DeveloperService, useClass: DeveloperServiceStub},
        {provide: ActivatedRoute, useValue: RouterStub},
        MesseagesService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(DeveloperDetailComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
    fixture.detectChanges();

    it('compare current title and user name', () => {
      expect(el.textContent).toContain('welcome');
    });
  });
});
