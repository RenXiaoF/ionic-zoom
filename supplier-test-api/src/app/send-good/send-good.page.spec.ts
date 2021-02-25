import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendGoodPage } from './send-good.page';

describe('SendGoodPage', () => {
  let component: SendGoodPage;
  let fixture: ComponentFixture<SendGoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendGoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendGoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
