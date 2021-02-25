import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertermyPage } from './convertermy.page';

describe('ConvertermyPage', () => {
  let component: ConvertermyPage;
  let fixture: ComponentFixture<ConvertermyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertermyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertermyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
