import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellsWrapperComponent } from './wells-wrapper.component';

describe('WellsWrapperComponent', () => {
  let component: WellsWrapperComponent;
  let fixture: ComponentFixture<WellsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
