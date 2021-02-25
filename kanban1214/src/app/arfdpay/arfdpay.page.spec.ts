import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArfdpayPage } from './arfdpay.page';

describe('ArfdpayPage', () => {
  let component: ArfdpayPage;
  let fixture: ComponentFixture<ArfdpayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArfdpayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArfdpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
