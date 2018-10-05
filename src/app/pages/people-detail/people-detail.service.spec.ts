import { TestBed, inject } from '@angular/core/testing';

import { PeopleDetailService } from './people-detail.service';

describe('PeopleDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleDetailService]
    });
  });

  it('should be created', inject([PeopleDetailService], (service: PeopleDetailService) => {
    expect(service).toBeTruthy();
  }));
});
