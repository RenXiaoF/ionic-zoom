import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllordersPage } from './allorders.page';

describe('AllordersPage', () => {
  let component: AllordersPage;
  let fixture: ComponentFixture<AllordersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllordersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
