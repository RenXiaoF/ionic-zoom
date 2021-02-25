import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielapplyPage } from './materielapply.page';

describe('MaterielapplyPage', () => {
  let component: MaterielapplyPage;
  let fixture: ComponentFixture<MaterielapplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterielapplyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterielapplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
