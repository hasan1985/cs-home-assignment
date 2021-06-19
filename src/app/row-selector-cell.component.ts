import { Component, OnInit } from '@angular/core';
import { CheckboxCheckState, GridV1CustomCellComponentBase, GridV1CustomCellParam } from '@csha-ui-comp-lib';
import { DeviceGridCustomCallback, DeviceGridData, DeviceStatus } from './app.interfaces';

@Component({
  selector: 'csha-row-selector-cell',
  template: `
      <csha-checkbox-v1
        [disabled]=disabled
        [checkStates]=checkStates
        (onChange)=onChange($event)
      ></csha-checkbox-v1>
    `
})
export class RowSelectorCellComponent implements GridV1CustomCellComponentBase<boolean, DeviceGridData> {

  public params: GridV1CustomCellParam<boolean, DeviceGridData>;
  public checkStates: CheckboxCheckState[] = [CheckboxCheckState.UNCHECKED, CheckboxCheckState.CHECKED] 
  public disabled: boolean;

  public refresh(): void {
    this.disabled = this.params.rowData.status === DeviceStatus.scheduled;
  };

  public onChange(checkboxCheckState: CheckboxCheckState): void {
    this.params.callbackMap[DeviceGridCustomCallback.rowSelected]?.(checkboxCheckState, this.params.rowData);
  }
}
