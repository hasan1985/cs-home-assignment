import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridV1Component } from './grid-v1.component';
import { GridCellRendererV1Component } from '../../grid-cell-renderer-v1/grid-cell-renderer-v1.component';

@NgModule({
  declarations: [
    GridV1Component,
    GridCellRendererV1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridV1Component
  ]
})
export class GridV1Module { }

export * from './grid-v1.interfaces';
