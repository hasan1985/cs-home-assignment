import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CheckboxCheckState } from './checkbox-v1.interfaces';

@Component({
  selector: 'csha-checkbox-v1',
  template: `
    <input 
      #checkboxElement 
      type="checkbox" 
      (click)="onClick($event)"
      [disabled]="disabled"
      [ngStyle]="!disabled && {'cursor': 'pointer'}"
    >
  `,
  styles: [
    `input {
      width: 18px;
      height: 18px;
    }`
  ]
})
export class CheckboxV1Component implements OnChanges, AfterViewInit {

  @Input() public disabled: boolean = false;
  @Input() public checkState: CheckboxCheckState = CheckboxCheckState.CHECKED;
  @Output() public onChange: EventEmitter<CheckboxCheckState> = new EventEmitter<CheckboxCheckState>();

  @ViewChild('checkboxElement') private checkboxElement: ElementRef<HTMLInputElement>;
  private currentCheckState: CheckboxCheckState;

  public ngAfterViewInit(): void {
    this.initCurrentCheckState();
  }

  public ngOnChanges(): void {
    this.initCurrentCheckState();
  }
  
  public onClick(e: MouseEvent): void {
    e.stopImmediatePropagation();
    if (this.disabled) return;

    if (this.currentCheckState !== CheckboxCheckState.UNCHECKED) {
      // i.e. current state is CHECKED or INDETERMINATE then onclick will change it to UNCHECKED
      this.currentCheckState = CheckboxCheckState.UNCHECKED;
    } else {
      // else current state is UNCHECKED and onclick will change it to CHECKED
      this.currentCheckState = CheckboxCheckState.CHECKED
    } // in this design onclick will never change the checkState to INDETERMINATE

    this.updateInputElementByCurrentCheckState();
    this.onChange.emit(this.currentCheckState);
  }

  private initCurrentCheckState(): void {
    this.currentCheckState = this.checkState;
    this.updateInputElementByCurrentCheckState();
  }

  private updateInputElementByCurrentCheckState(): void {
    if (this.disabled === false) {
      switch(this.currentCheckState) {
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

  private markChecked(): void {
    if (this.checkboxElement?.nativeElement) {
      this.checkboxElement.nativeElement.checked = true;
      this.checkboxElement.nativeElement.indeterminate = false;
    }
  }

  private markUnchecked(): void {
    if (this.checkboxElement?.nativeElement) {
      this.checkboxElement.nativeElement.checked = false;
      this.checkboxElement.nativeElement.indeterminate = false;
    }
  }

  private markIndeterminate(): void {
    if (this.checkboxElement?.nativeElement) {
      this.checkboxElement.nativeElement.checked = false;
      this.checkboxElement.nativeElement.indeterminate = true;
    }
  }
}