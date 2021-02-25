import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducingDepartmentPage } from './producing-department.page';

describe('ProducingDepartmentPage', () => {
  let component: ProducingDepartmentPage;
  let fixture: ComponentFixture<ProducingDepartmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducingDepartmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducingDepartmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
