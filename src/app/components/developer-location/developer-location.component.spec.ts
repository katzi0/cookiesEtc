import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeveloperLocationComponent} from './developer-location.component';
import {DEVELOPERS} from '../../mocks/mock-developers';
import {of} from 'rxjs/observable/of';
import {DeveloperService} from '../../services/developer.service';

class DeveloperServiceStub {
  getDeveloper(id: number) {
    return of(DEVELOPERS.find(x => x.id === id));
  }
}


fdescribe('get currect developer from service', () => {
  let component: DeveloperLocationComponent;
  let fixture: ComponentFixture<DeveloperLocationComponent>;
  let developerService : DeveloperServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperLocationComponent],
      providers: [{provide: DeveloperService, useClass: DeveloperServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperLocationComponent);
    component = fixture.componentInstance;
    // developerService = TestBed.get(DeveloperService);
    spyOn(developerService,'getDeveloper');
    developerService.getDeveloper(1);
    fixture.detectChanges();
    it("compare developer id with developer from mock id ", () => {
      expect(developerService.getDeveloper(1)).toHaveBeenCalled();
    });
  });

});
