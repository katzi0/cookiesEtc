import { TestBed, inject } from '@angular/core/testing';

import { MesseagesService } from './messeages.service';

describe('MesseagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MesseagesService]
    });
  });

  it('should be created', inject([MesseagesService], (service: MesseagesService) => {
    expect(service).toBeTruthy();
  }));
});
