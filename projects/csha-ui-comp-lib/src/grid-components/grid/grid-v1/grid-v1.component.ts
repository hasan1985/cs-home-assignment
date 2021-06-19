import { Component, Input, OnInit } from '@angular/core';
import { GridV1ColumnConfig, GridV1ColumnType } from './grid-v1.interfaces';

@Component({
  selector: 'csha-grid-v1',
  templateUrl: './grid-v1.component.html',
  styleUrls: ['./grid-v1.component.css']
})
export class GridV1Component<RowType = any> {

  @Input() public columnConfigs: GridV1ColumnConfig<RowType>[];
  @Input() public data: RowType[]; // each row should have a defined interface

  public columnType: typeof GridV1ColumnType = GridV1ColumnType;

  public refresh() {
  }

}
