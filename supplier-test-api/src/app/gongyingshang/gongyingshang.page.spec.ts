import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GongyingshangPage } from './gongyingshang.page';

describe('GongyingshangPage', () => {
  let component: GongyingshangPage;
  let fixture: ComponentFixture<GongyingshangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GongyingshangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GongyingshangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
