import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicedetailPage } from './invoicedetail.page';

describe('InvoicedetailPage', () => {
  let component: InvoicedetailPage;
  let fixture: ComponentFixture<InvoicedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicedetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
