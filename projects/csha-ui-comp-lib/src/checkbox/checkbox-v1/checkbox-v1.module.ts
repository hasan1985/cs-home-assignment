import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxV1Component } from './checkbox-v1.component';

@NgModule({
  declarations: [
    CheckboxV1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CheckboxV1Component
  ]
})
export class CheckboxV1Module { }

export * from './checkbox-v1.interfaces'