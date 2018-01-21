import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { DevelopersComponent } from './developers.component';
import {AppComponent} from '../../app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {DeveloperService} from '../../services/developer.service';
import {DEVELOPERS} from '../../mocks/mock-developers';
import {of} from 'rxjs/observable/of';
import {MesseagesService} from '../../services/messeages.service';
// import {Store} from '@ngrx/store';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


// import { }


class DeveloperServiceStub {
  getDeveloper(id: number) {
    return of(DEVELOPERS.find( x => x.id === id));
  }
}

xdescribe('DevelopersComponent', () => {
  let component: DevelopersComponent;
  let fixture: ComponentFixture<DevelopersComponent>;

  let developerService : DeveloperServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevelopersComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({})
      ],
      providers: [
          {provide: DeveloperService, useClass: DeveloperServiceStub},
        MesseagesService
        // , Store
        ]
    })
      .compileComponents();
  }));

  beforeEach(inject([Store], (_store: Store<any>) => {
    fixture = TestBed.createComponent(DevelopersComponent);
    component = fixture.componentInstance;
    spyOn(developerService,'getDeveloper');
    developerService.getDeveloper(1);
    // fixture.detectChanges();
  });

  it('should invoke getDeveloper func', () => {
     expect(developerService.getDeveloper(1)).toHaveBeenCalled();
  });
  // it('should work', () => {
  //   // describe('aa', () => true);
  //   const a = true;
  //   expect(a).toBeTruthy();
  // });
});
