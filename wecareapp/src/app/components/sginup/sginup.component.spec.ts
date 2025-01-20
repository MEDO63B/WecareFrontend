/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SginupComponent } from './sginup.component';

describe('SginupComponent', () => {
  let component: SginupComponent;
  let fixture: ComponentFixture<SginupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SginupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SginupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
