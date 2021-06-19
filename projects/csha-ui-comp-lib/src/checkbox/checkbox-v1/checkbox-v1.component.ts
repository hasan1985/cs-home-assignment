import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CheckboxCheckState } from './checkbox-v1.interfaces';

@Component({
  selector: 'csha-checkbox-v1',
  template: `
    <input #checkboxElement type="checkbox" (click)="onClick($event)" [disabled]="disabled">
  `,
  styles: [
    `input {
      width: 16px;
      height: 16px
    }`
  ]
})
export class CheckboxV1Component implements AfterViewInit {

  @Input() disabled: boolean;
  @Input() checkStates: CheckboxCheckState[] = [CheckboxCheckState.UNCHECKED, CheckboxCheckState.CHECKED]; // by default only checked and unchecked
  @Output() onChange: EventEmitter<CheckboxCheckState> = new EventEmitter<CheckboxCheckState>();

  @ViewChild('checkboxElement') checkboxElement: ElementRef<HTMLInputElement>;
  private currentCheckStateIndex: number = 0;
  
  public ngAfterViewInit(): void {
    this.updateCurrentCheckState();
  }

  public onClick(e: MouseEvent): void {
    e.stopImmediatePropagation();
    this.rotateFromAvailableCheckStates();
    this.updateCurrentCheckState();
    this.onChange.emit(this.checkStates[this.currentCheckStateIndex]);
  }

  public markChecked(): void {
    this.checkboxElement.nativeElement.checked = true;
    this.checkboxElement.nativeElement.indeterminate = false;
  }

  public markUnchecked(): void {
    this.checkboxElement.nativeElement.checked = false;
    this.checkboxElement.nativeElement.indeterminate = false;
  }

  public markIndeterminate(): void {
    this.checkboxElement.nativeElement.checked = false;
    this.checkboxElement.nativeElement.indeterminate = true;
  }

  private rotateFromAvailableCheckStates(): void {
    this.currentCheckStateIndex = (this.currentCheckStateIndex + 1) % this.checkStates.length;
  }

  private updateCurrentCheckState(): void {
    const state: CheckboxCheckState = this.checkStates[this.currentCheckStateIndex];
    switch(state) {
      case CheckboxCheckState.UNCHECKED:
        this.markUnchecked();
        break;
      case CheckboxCheckState.CHECKED:
        this.markChecked();
        break;
      case CheckboxCheckState.INDETERMINATE:
        this.markIndeterminate();
        break;
      default:
        this.markUnchecked();
    }
  }
}