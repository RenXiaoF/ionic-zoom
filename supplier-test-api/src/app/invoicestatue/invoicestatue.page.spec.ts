import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicestatuePage } from './invoicestatue.page';

describe('InvoicestatuePage', () => {
  let component: InvoicestatuePage;
  let fixture: ComponentFixture<InvoicestatuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicestatuePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicestatuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
