import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderstatuePage } from './orderstatue.page';

describe('OrderstatuePage', () => {
  let component: OrderstatuePage;
  let fixture: ComponentFixture<OrderstatuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderstatuePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderstatuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
