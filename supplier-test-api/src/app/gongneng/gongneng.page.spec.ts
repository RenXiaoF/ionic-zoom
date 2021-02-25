import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GongnengPage } from './gongneng.page';

describe('GongnengPage', () => {
  let component: GongnengPage;
  let fixture: ComponentFixture<GongnengPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GongnengPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GongnengPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
