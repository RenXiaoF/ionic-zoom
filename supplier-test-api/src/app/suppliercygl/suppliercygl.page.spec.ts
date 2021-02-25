import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliercyglPage } from './suppliercygl.page';

describe('SuppliercyglPage', () => {
  let component: SuppliercyglPage;
  let fixture: ComponentFixture<SuppliercyglPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliercyglPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliercyglPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
