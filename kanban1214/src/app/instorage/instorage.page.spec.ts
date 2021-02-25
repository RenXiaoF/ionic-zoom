import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstoragePage } from './instorage.page';

describe('InstoragePage', () => {
  let component: InstoragePage;
  let fixture: ComponentFixture<InstoragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstoragePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
