import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GridV1CustomCellComponentBase, GridV1CustomCellParam } from '@csha-ui-comp-lib';
import { DeviceGridData, DeviceStatus } from "./device-grid-page.interfaces";

@Component({
  selector: 'csha-device-grid-status-cell',
  template: `
      <div style="display: inline-block; width: 24px;">
        <div [hidden]="!this.showGreenDot" class="green-dot"></div>
      </div>
      <span>{{status}}</span>
  `,
  styles: [
    `.green-dot {
      height: 12px;
      width: 12px;
      background-color: lightgreen;
      border-radius: 50%;
    }
    `
  ]
})
export class DeviceGridStatusCellComponent implements GridV1CustomCellComponentBase<string, DeviceGridData> {

  public params: GridV1CustomCellParam<string, DeviceGridData>;
  public status: string;
  public showGreenDot: boolean = false;

  public refresh(): void {
    if (this.params.cellData === DeviceStatus.available) {
      this.status = "Available"; // todo localization
      this.showGreenDot = true;
    } else {
      this.status = "Scheduled"; // todo localization
      this.showGreenDot = false;
    }
  };
}
