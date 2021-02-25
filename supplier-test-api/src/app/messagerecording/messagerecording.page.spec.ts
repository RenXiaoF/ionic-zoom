import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerecordingPage } from './messagerecording.page';

describe('MessagerecordingPage', () => {
  let component: MessagerecordingPage;
  let fixture: ComponentFixture<MessagerecordingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagerecordingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerecordingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
