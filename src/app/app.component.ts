import { OnInit, Type } from '@angular/core';
import { Component } from '@angular/core';
import { CheckboxCheckState, GridV1ColumnConfig, GridV1ColumnType, GridV1CustomCellConfig } from '@csha-ui-comp-lib';
import { DeviceGridCustomCallback, DeviceGridData, DeviceStatus } from './app.interfaces';
import { RowSelectorCellComponent } from './row-selector-cell.component';

/**
 * todos
 * localizations
 * add row click callback
 * make row selected on click if status permits
 * hover effect on row
 * highlight on selection
 * highlight on hover   
 */

@Component({
  selector: 'csha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.gridData = this.getGridData();
  }

  public gridData: DeviceGridData[] = [];
  
  private onRowSelection = (checkState: CheckboxCheckState, gridData: DeviceGridData): void => {
    console.log(checkState, gridData.name);
  }

  private readonly rowSelectorCellConfig: GridV1CustomCellConfig<boolean, DeviceGridData> = {
    cellComponent: RowSelectorCellComponent,
    callbackMap: {
      [DeviceGridCustomCallback.rowSelected]: this.onRowSelection
    }
  }

  public readonly gridColumnConfig: GridV1ColumnConfig<DeviceGridData>[] = [
    {
      displayName: "",
      dataField: "selected",
      minWidth: 100,
      columnType: GridV1ColumnType.customCellRenderer,
      customCellConfig: this.rowSelectorCellConfig
    }, {
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
      columnType: GridV1ColumnType.text
    }
  ]

  private getGridData(): DeviceGridData[] {
    const rawData = this.getRawData();
    return rawData.map(datum => ({
      selected: false,  // initially all unselected
      name: datum.name,
      device: datum.device,
      path: datum.path,
      status: DeviceStatus[datum.status]
    }));
  }

  private getRawData(): Array<{[key: string]: string}> {
    return [
      {name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled'},
      {name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available'},
      {name: 'uxtheme.dll', device: 'Lanniester', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available'},
      {name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled'},
      {name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled'}
    ];
  }
}