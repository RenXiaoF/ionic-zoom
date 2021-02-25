import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelphiStudyPage } from './delphi-study.page';

describe('DelphiStudyPage', () => {
  let component: DelphiStudyPage;
  let fixture: ComponentFixture<DelphiStudyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelphiStudyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelphiStudyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
