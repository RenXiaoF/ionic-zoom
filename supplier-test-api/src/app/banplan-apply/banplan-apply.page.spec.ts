import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanplanApplyPage } from './banplan-apply.page';

describe('BanplanApplyPage', () => {
  let component: BanplanApplyPage;
  let fixture: ComponentFixture<BanplanApplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanplanApplyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanplanApplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
