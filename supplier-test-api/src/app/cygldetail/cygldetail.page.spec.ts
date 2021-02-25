import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CygldetailPage } from './cygldetail.page';

describe('CygldetailPage', () => {
  let component: CygldetailPage;
  let fixture: ComponentFixture<CygldetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CygldetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CygldetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
