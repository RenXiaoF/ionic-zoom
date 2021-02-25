import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanplanApplyListPage } from './banplan-apply-list.page';

describe('BanplanApplyListPage', () => {
  let component: BanplanApplyListPage;
  let fixture: ComponentFixture<BanplanApplyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanplanApplyListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanplanApplyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
