import {TestBed, inject} from '@angular/core/testing';

import {DeveloperService} from './developer.service';
import {MesseagesService} from './messeages.service';
import {DEVELOPERS} from '../mocks/mock-developers';

describe('DeveloperService', () => {
  let service: DeveloperService;
  const mockDeveloper = {
    id: 1,
    name: 'Shai',
    location:
      {
        name: 'Paris Office',
        longitude: 2.3522219000000177,
        latitude: 48.856614
      }
  };

  const developersListLength = DEVELOPERS.length;
  service = new DeveloperService(new MesseagesService());

  it('get developers observable value', (done: DoneFn) => {
    service.getDeveloper(1).subscribe(value => {
      expect(value.name).toBe(mockDeveloper.name);
      done();
    });
  });
  it('get developers list length observable value', (done: DoneFn) => {
    // service = new DeveloperService(new MesseagesService());
    service.getDevelopers().subscribe(value => {
      expect(value.length).toBe(developersListLength);
      expect(value.length).not.toBe(developersListLength - 1);
      done();
    });
  });
});
