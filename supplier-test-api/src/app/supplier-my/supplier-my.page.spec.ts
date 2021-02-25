import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierMyPage } from './supplier-my.page';

describe('SupplierMyPage', () => {
  let component: SupplierMyPage;
  let fixture: ComponentFixture<SupplierMyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierMyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierMyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
