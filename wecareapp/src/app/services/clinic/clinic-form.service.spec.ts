/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClinicFormService } from './clinic-form.service';

describe('Service: ClinicForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClinicFormService]
    });
  });

  it('should ...', inject([ClinicFormService], (service: ClinicFormService) => {
    expect(service).toBeTruthy();
  }));
});
