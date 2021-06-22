import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRowSelectionCountV1Component } from './grid-row-selection-count-v1.component';

describe('GridRowSelectionCountV1Component', () => {
  let component: GridRowSelectionCountV1Component;
  let fixture: ComponentFixture<GridRowSelectionCountV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridRowSelectionCountV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridRowSelectionCountV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
