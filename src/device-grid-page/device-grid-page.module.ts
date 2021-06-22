import { NgModule } from '@angular/core';
import { DeviceGridPageComponent } from './device-grid-page.component';
import { CheckboxV1Module, DownloadButtonV1Module, GridV1Module } from '@csha-ui-comp-lib';
import { CommonModule } from '@angular/common';
import { DeviceGridStatusCellComponent } from './device-grid-status-cell.component';



@NgModule({
  declarations: [
    DeviceGridPageComponent,
    DeviceGridStatusCellComponent
  ],
  imports: [
    CommonModule,
    GridV1Module,
    CheckboxV1Module,
    DownloadButtonV1Module
  ],
  exports: [
    DeviceGridPageComponent
  ]
})
export class DeviceGridPageModule { }
