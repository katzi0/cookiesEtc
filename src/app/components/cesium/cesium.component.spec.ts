import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CesiumComponent } from './cesium.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CesiumComponent', () => {
  let component: CesiumComponent;
  let fixture: ComponentFixture<CesiumComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CesiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CesiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('canvas'));
    el = de.nativeElement;
  });


});
