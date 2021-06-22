import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridRowTypeBase, GridV1ColumnConfig, GridV1ColumnType } from './grid-v1.interfaces';
import { CheckboxCheckState } from '../../../checkbox/checkbox-v1/checkbox-v1.interfaces';
import { GridRowSelectionCountV1Component } from '../../grid-row-selection-count/grid-row-selection-count-v1/grid-row-selection-count-v1.component';

@Component({
  selector: 'csha-grid-v1',
  templateUrl: './grid-v1.component.html',
  styleUrls: ['./grid-v1.component.css']
})
export class GridV1Component<RowType extends GridRowTypeBase> implements OnInit {

  //#region Inputs and outputs
  /**
   * column configurations
   */
  @Input() public columnConfigs: GridV1ColumnConfig<RowType>[];

  /**
   * row data for the grid
   */
  @Input() public gridData: RowType[];

  /**
   * If true grid will show a checkbox column that will allow to select each row
   */
  @Input() public showRowSelectionCheckbox: boolean;

  /**
   * callback to check whether a row selecting checkbox should be enabled or not, returns true if selection is enable
   */
  @Input() public getRowSelectibility: (row: RowType) => boolean;

  /**
   * on any row selection change it call back consumer with currently selected row objects
   * TODO - send last affected row id as well
   */
  @Output() public onRowSelectionChange: EventEmitter<RowType[]> = new EventEmitter<RowType[]>();

  /**
   * selction counter component with select/unselect all checkbox
   */
  @Input() public rowSelectionCountComponent: GridRowSelectionCountV1Component;
  //#endregion

  public columnTypeEnum: typeof GridV1ColumnType = GridV1ColumnType;
  
  public ngOnInit() {
    this.initRowSelectibility();
    this.setRowSelectionCountComponent();
  }

  //#region row selection
  public rowSelectionStateMap: {[key: string]: RowSelectionState} = {}; // object map key:rowId -> value:rowSelectionState
  private selectableRowCount: number;
  private selectedRowSet: Set<RowType> = new Set();

  private initRowSelectibility(): void {
    this.rowSelectionStateMap = {}
    this.selectableRowCount = 0;
    if (this.showRowSelectionCheckbox && this.getRowSelectibility) {
      for (let rowData of this.gridData) {
        const selectable = this.getRowSelectibility(rowData);
        this.rowSelectionStateMap[rowData.rowId] = {
          selectionDisabled: !selectable,
          selectionState: CheckboxCheckState.UNCHECKED
        };
        selectable && this.selectableRowCount++;
      }
    }
  }

  public isRowSelected(rowData: RowType): boolean {
    return this.rowSelectionStateMap[rowData.rowId].selectionState === CheckboxCheckState.CHECKED;
  }

  public onRowSelectionCheckboxChange(rowData: RowType, checkState: CheckboxCheckState): void {
    if (checkState === CheckboxCheckState.CHECKED) {
      this.selectedRowSet.add(rowData);      
    } else {
      this.selectedRowSet.delete(rowData);
    }

    this.rowSelectionStateMap[rowData.rowId].selectionState = checkState;
    this.updateRowSelectionCountComponent(this.selectedRowSet.size);
    this.emitRowSelectionChange();
  }

  public unSelectAllRows(): void {
    Object.values(this.rowSelectionStateMap).forEach(selection => selection.selectionState = CheckboxCheckState.UNCHECKED);
    this.selectedRowSet.clear();
    this.emitRowSelectionChange();
    this.updateRowSelectionCountComponent(0);
  }

  public selectAllSelectableRows(): void {
    this.selectedRowSet.clear();
    for(let rowData of this.gridData) {
      const rowSelectionState = this.rowSelectionStateMap[rowData.rowId];
      if (!rowSelectionState.selectionDisabled) {
        rowSelectionState.selectionState = CheckboxCheckState.CHECKED;
        this.selectedRowSet.add(rowData);
      }
    }
    this.updateRowSelectionCountComponent(this.selectedRowSet.size);
    this.emitRowSelectionChange();
  }

  private emitRowSelectionChange(): void {
    this.onRowSelectionChange.emit(Array.from(this.selectedRowSet.values()));
  }
  //#endregion

  //#region selection counter
  private setRowSelectionCountComponent(): void {
    this.rowSelectionCountComponent.selectedCount = 0;
    this.rowSelectionCountComponent.totalCount = this.gridData.length;
    this.rowSelectionCountComponent.selectableCount = this.selectableRowCount;
    this.rowSelectionCountComponent.onUnSelectAll.subscribe(() => this.unSelectAllRows());
    this.rowSelectionCountComponent.onSelectAllPossible.subscribe(() => this.selectAllSelectableRows());
  }

  private updateRowSelectionCountComponent(selectedCount: number): void {
    this.rowSelectionCountComponent.selectedCount = selectedCount;
    this.rowSelectionCountComponent.ngOnChanges();
  }
  //#endregion

}

interface RowSelectionState {
  selectionState: CheckboxCheckState;
  selectionDisabled: boolean; // true for not selectable
}
