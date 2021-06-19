import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridV1Component } from './grid-v1.component';

describe('GridV1Component', () => {
  let component: GridV1Component;
  let fixture: ComponentFixture<GridV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
