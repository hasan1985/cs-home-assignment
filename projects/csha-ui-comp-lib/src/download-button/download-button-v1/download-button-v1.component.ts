import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'csha-download-button-v1',
  template: `
    <div (click)=onClick() style="cursor: 'pointer'">
      <img src="assets/icons/download-file.svg" style="width: 20px; margin-right: 10px;">
      <span>{{buttonText}}</span>
    </div>
  `
})
export class DownloadButtonV1Component {

  @Output() public onDownloadSelectedClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() public buttonText: string = "Downlaod" // todo - localize

  public onClick(): void {
    this.onDownloadSelectedClick.emit();
  }

}
