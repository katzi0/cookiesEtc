import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {DeveloperService} from '../../services/developer.service';
import {MesseagesService} from '../../services/messeages.service';
import {RouterTestingModule} from '@angular/router/testing';
import {DeveloperSearchComponent} from '../developer-search/developer-search.component';
import {Developer} from '../../models/developr.model';
import {OfficeLocation} from '../../models/office.location';



describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let developerService;
  // let developerList: Developer[];
  let developerServiceStub;
  // let selectedDeveloper;//: Developer;
  // let singleDeveloperMockUp;


  beforeEach(async(() => {

    developerServiceStub = {
      user: { id: 1, name: 'shai'}
    };



    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DashboardComponent, DeveloperSearchComponent],
      providers:
        [
          {provide: DeveloperService, useValue: developerServiceStub},
          MesseagesService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {


    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    developerService = TestBed.get(DeveloperService);

    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;

    // developerList = TestBed.get(developerService);

  });
  it('should show top developers title', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Top Developer');
  });
  // it('should show developer list', () => {
  //   fixture.detectChanges();
  //   // developerService.getDeveloper(developerServiceStub.user.id).subscribe(x => selectedDeveloper = x);
  //   selectedDeveloper.name = 'shai';
  //   // selectedDeveloper.name === 'shai';
  //   expect(selectedDeveloper.name).toContain('shai');
  //   // expect(developerList).toContain(singleDeveloperMockUp);
  // });

});
