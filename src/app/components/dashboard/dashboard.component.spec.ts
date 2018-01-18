import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {DeveloperService} from '../../services/developer.service';
import {MesseagesService} from '../../services/messeages.service';
import {RouterTestingModule} from '@angular/router/testing';
import {DeveloperSearchComponent} from '../developer-search/developer-search.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let developerService: DeveloperService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DashboardComponent, DeveloperSearchComponent],
      providers: [DeveloperService, MesseagesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    developerService = fixture.debugElement.injector.get(DeveloperService);

    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
  });
  it('should show top developers title', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Top Developer');
  });

});
