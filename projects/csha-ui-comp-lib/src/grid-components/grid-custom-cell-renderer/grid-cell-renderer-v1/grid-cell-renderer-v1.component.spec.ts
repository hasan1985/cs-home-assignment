import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCellRendererV1Component } from './grid-cell-renderer-v1.component';

describe('GridCellRendererV1Component', () => {
  let component: GridCellRendererV1Component;
  let fixture: ComponentFixture<GridCellRendererV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCellRendererV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCellRendererV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
