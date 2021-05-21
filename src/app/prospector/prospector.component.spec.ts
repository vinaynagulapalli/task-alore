import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectorComponent } from './prospector.component';

describe('ProspectorComponent', () => {
  let component: ProspectorComponent;
  let fixture: ComponentFixture<ProspectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
