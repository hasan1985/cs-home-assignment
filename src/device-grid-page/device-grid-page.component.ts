import { Component, OnInit, ViewChild } from '@angular/core';
import { GridV1ColumnConfig, GridV1ColumnType, GridV1Component, GridV1CustomCellConfig } from '@csha-ui-comp-lib';
import { DeviceGridStatusCellComponent } from './device-grid-status-cell.component';
import { DeviceGridData, DeviceStatus } from './device-grid-page.interfaces';

@Component({
  selector: 'csha-device-grid-page',
  templateUrl: './device-grid-page.component.html',
  styleUrls: ['./device-grid-page.component.css']
})
export class DeviceGridPageComponent implements OnInit {

  @ViewChild(GridV1Component) private deviceGridComponent: GridV1Component<DeviceGridData>;

  public selectedRowCount: number;
  public selectableRowCount: number;
  public totalRowCount: number;
  private selectedRows: DeviceGridData[] = [];
  
  public ngOnInit() {
    this.setGridData();
  }

  public gridData: DeviceGridData[] = [];

  private statusCustomCellConfig: GridV1CustomCellConfig<string, DeviceGridData> = {
    cellComponent: DeviceGridStatusCellComponent,
    callbackMap: {} // no to call back
  }
  
  public readonly gridColumnConfig: GridV1ColumnConfig<DeviceGridData>[] = [
    {
      displayName: "Name",
      dataField: "name",
      minWidth: 100,
      columnType: GridV1ColumnType.text
    }, {
      displayName: "Device",
      dataField: "device",
      minWidth: 100,
      columnType: GridV1ColumnType.text
    }, {
      displayName: "Path",
      dataField: "path",
      minWidth: 400,
      columnType: GridV1ColumnType.text
    }, {
      displayName: "Status",
      dataField: "status",
      minWidth: 100,
      columnType: GridV1ColumnType.customCellRenderer,
      customCellConfig: this.statusCustomCellConfig
    }
  ]

  public onDownloadSelectedClick(): void {
    if (this.selectedRows && this.selectedRows.length > 0) {
      const output = [];
      this.selectedRows.forEach(rowData => {
        output.push(`Device: ${rowData.device}\nPath: ${rowData.path} `);
      })
      alert(output.join("\n\n"));
    }
  }

  public getRowSelectibility(rowData: DeviceGridData): boolean {
    return rowData.status === DeviceStatus.available;
  }

  public onRowSelectionChange(selectedRow: DeviceGridData[]) {
    this.selectedRows = selectedRow;
  }

  private setGridData(): void {
    const rawData = this.getRawData();
    this.gridData = rawData.map((datum, index) => ({
      rowId: index.toString(),
      name: datum.name,
      device: datum.device,
      path: datum.path,
      status: DeviceStatus[datum.status]
    }));

    this.totalRowCount = this.gridData.length;
  }

  private getRawData(): Array<{[key: string]: string}> {
    return [
      {name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled'},
      {name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'scheduled'},
      {name: 'uxtheme.dll', device: 'Lanniester', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available'},
      {name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'available'},
      {name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled'}
    ];
  }
}


