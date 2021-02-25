import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliergzdspPage } from './suppliergzdsp.page';

describe('SuppliergzdspPage', () => {
  let component: SuppliergzdspPage;
  let fixture: ComponentFixture<SuppliergzdspPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliergzdspPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliergzdspPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
