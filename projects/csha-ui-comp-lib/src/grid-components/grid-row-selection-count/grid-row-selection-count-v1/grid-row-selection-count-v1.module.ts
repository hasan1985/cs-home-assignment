import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridRowSelectionCountV1Component } from './grid-row-selection-count-v1.component';
import { CheckboxV1Module } from '../../../checkbox/checkbox-v1/checkbox-v1.module';

@NgModule({
  declarations: [
    GridRowSelectionCountV1Component
  ],
  imports: [
    CommonModule,
    CheckboxV1Module
  ],
  exports: [
    GridRowSelectionCountV1Component
  ]
})
export class GridRowSelectionCountV1Module { }
