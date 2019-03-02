import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcoPage } from './barco.page';

describe('BarcoPage', () => {
  let component: BarcoPage;
  let fixture: ComponentFixture<BarcoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
