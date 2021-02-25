import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagecontentPage } from './messagecontent.page';

describe('MessagecontentPage', () => {
  let component: MessagecontentPage;
  let fixture: ComponentFixture<MessagecontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagecontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagecontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
