import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmaterielapplyPage } from './addmaterielapply.page';

describe('AddmaterielapplyPage', () => {
  let component: AddmaterielapplyPage;
  let fixture: ComponentFixture<AddmaterielapplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmaterielapplyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmaterielapplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
