import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeveloperDetailComponent} from './developer-detail.component';
import {DebugElement} from '@angular/core';
import {DeveloperService} from '../../services/developer.service';
import {Developer} from '../../models/developr.model';
import {By} from '@angular/platform-browser';

describe('DeveloperDetailComponent', () => {
  let component: DeveloperDetailComponent;
  let fixture: ComponentFixture<DeveloperDetailComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let developerServiceStub;

  let developerService;
  beforeEach(async(() => {
    developerServiceStub = {
      user: {name: 'Test User'}
    };
    const developer: Developer = {name: developerServiceStub.user.name};
    // developer.name = developerServiceStub.user.name;

    TestBed.configureTestingModule({
      declarations: [DeveloperDetailComponent],
      providers: [{provide: DeveloperService, useValue: developerServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    developerService = TestBed.get(DeveloperService);
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
  });

  it('should show user first name', () => {
    developerService.user.name = 'Test User';
    fixture.detectChanges();
    expect(el.textContent).toContain('Welcome');
    expect(el.textContent).toContain('Test User');
  });
});
