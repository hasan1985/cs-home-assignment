import { ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { CheckboxV1Component } from '../../../checkbox/checkbox-v1/checkbox-v1.component'
import { CheckboxCheckState } from '../../../checkbox/checkbox-v1/checkbox-v1.interfaces'

@Component({
  selector: 'csha-grid-row-selection-count-v1',
  template: `
    <div class="container">
      <csha-checkbox-v1
        (onChange)=onCheckboxChange($event)
        [checkState]=checkboxCurrentCheckState
        [disabled]=checkboxDisabled>
      </csha-checkbox-v1>
      <div *ngIf="selectedCount>0">Selected {{selectedCount}}</div>
      <div *ngIf="selectedCount===0">None Selected</div>
    </div>
  `,
  styleUrls: ['./grid-row-selection-count-v1.component.css']
})
export class GridRowSelectionCountV1Component implements OnChanges {

  @Input() public selectedCount: number;
  @Input() public selectableCount: number;
  @Input() public totalCount: number;
  @Output() public onSelectAllPossible: EventEmitter<void> = new EventEmitter();
  @Output() public onUnSelectAll: EventEmitter<void> = new EventEmitter();
  @ViewChild(CheckboxV1Component) private checkboxComponent: CheckboxV1Component;
  
  public checkboxDisabled: boolean;
  public checkboxCurrentCheckState: CheckboxCheckState = CheckboxCheckState.UNCHECKED;
  
  public ngOnChanges(): void {
    this.setCheckboxCheckState();
  }

  public onCheckboxChange(newState: any): void {
    if (this.checkboxCurrentCheckState === CheckboxCheckState.UNCHECKED) {
      this.onSelectAllPossible.emit();
    } else { // checked or underterminate
      if (this.selectedCount === this.selectableCount) {
        // all selectable selected only possible next state is to unselect all
        this.onUnSelectAll.emit();
      } else {
        // some are not selected so select all
        this.onSelectAllPossible.emit();
      }
    }
  }

  private setCheckboxCheckState(): void {
    if (this.selectableCount === 0 || this.totalCount === 0) {
      this.checkboxDisabled = true;
    } else {
      this.checkboxDisabled = false;
      if (this.selectedCount === 0) {
        this.checkboxCurrentCheckState = CheckboxCheckState.UNCHECKED;
      } else if (this.selectedCount < this.totalCount) {
        this.checkboxCurrentCheckState = CheckboxCheckState.INDETERMINATE
      } else if (this.selectedCount === this.totalCount) {
        this.checkboxCurrentCheckState = CheckboxCheckState.CHECKED
      }
      this.checkboxComponent.ngOnChanges();
    }
  }
}
