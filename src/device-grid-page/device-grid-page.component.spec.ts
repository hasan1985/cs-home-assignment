import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceGridPageComponent } from './device-grid-page.component';

describe('DeviceGridPageComponent', () => {
  let component: DeviceGridPageComponent;
  let fixture: ComponentFixture<DeviceGridPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceGridPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
