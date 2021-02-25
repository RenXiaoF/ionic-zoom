import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactscradPage } from './contactscrad.page';

describe('ContactscradPage', () => {
  let component: ContactscradPage;
  let fixture: ComponentFixture<ContactscradPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactscradPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactscradPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
