import { TestBed } from '@angular/core/testing';

import { TitlemetaService } from './titlemeta.service';

describe('TitlemetaService', () => {
  let service: TitlemetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitlemetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
