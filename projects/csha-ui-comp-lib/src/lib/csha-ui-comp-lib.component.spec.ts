import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CshaUiCompLibComponent } from './csha-ui-comp-lib.component';

describe('CshaUiCompLibComponent', () => {
  let component: CshaUiCompLibComponent;
  let fixture: ComponentFixture<CshaUiCompLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CshaUiCompLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CshaUiCompLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
