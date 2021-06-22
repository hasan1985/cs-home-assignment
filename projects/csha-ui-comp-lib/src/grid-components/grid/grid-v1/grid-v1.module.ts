import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridV1Component } from './grid-v1.component';
import { GridCellRendererV1Component } from '../../grid-custom-cell-renderer/grid-cell-renderer-v1/grid-cell-renderer-v1.component';
import { GridRowSelectionCountV1Module } from '../../grid-row-selection-count/grid-row-selection-count-v1/grid-row-selection-count-v1.module';
import { CheckboxV1Module } from '../../../checkbox/checkbox-v1/checkbox-v1.module';

@NgModule({
  declarations: [
    GridV1Component,
    GridCellRendererV1Component
  ],
  imports: [
    CommonModule,
    GridRowSelectionCountV1Module,
    CheckboxV1Module
  ],
  exports: [
    GridV1Component,
    CommonModule,
    GridRowSelectionCountV1Module
  ]
})
export class GridV1Module { }

export * from './grid-v1.component'
export * from './grid-v1.interfaces';
