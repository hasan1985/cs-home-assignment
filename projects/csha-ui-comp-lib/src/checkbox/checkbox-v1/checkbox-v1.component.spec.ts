import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxV1Component } from './checkbox-v1.component';

describe('CheckboxV1Component', () => {
  let component: CheckboxV1Component;
  let fixture: ComponentFixture<CheckboxV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
