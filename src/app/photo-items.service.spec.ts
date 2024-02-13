import { TestBed } from '@angular/core/testing';

import { PhotoItemsService } from './photo-items.service';

describe('PhotoItemsService', () => {
  let service: PhotoItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
