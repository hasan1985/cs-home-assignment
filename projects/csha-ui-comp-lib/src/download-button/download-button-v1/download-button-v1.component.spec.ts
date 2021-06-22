import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadButtonV1Component } from './download-button-v1.component';

describe('DownloadButtonV1Component', () => {
  let component: DownloadButtonV1Component;
  let fixture: ComponentFixture<DownloadButtonV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadButtonV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadButtonV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
