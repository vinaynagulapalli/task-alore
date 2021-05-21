import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsModalComponent } from './segments-modal.component';

describe('SegmentsModalComponent', () => {
  let component: SegmentsModalComponent;
  let fixture: ComponentFixture<SegmentsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
