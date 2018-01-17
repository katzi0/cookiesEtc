import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperLocationComponent } from './developer-location.component';

describe('DeveloperLocationComponent', () => {
  let component: DeveloperLocationComponent;
  let fixture: ComponentFixture<DeveloperLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
