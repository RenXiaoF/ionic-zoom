import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityPage } from './capacity.page';

describe('CapacityPage', () => {
  let component: CapacityPage;
  let fixture: ComponentFixture<CapacityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
