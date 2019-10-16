import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellListComponent } from './well-list.component';

class MockWellService {
  getWellData() {
    return [
      {
        "type": "Danger",
        "name": "Well One",
        "sourceKey": "423ghbd89"
      },
      {
        "type": "Danger",
        "name": "Well Two",
        "sourceKey": "67gj54657"
      }
    ];
  }
}

describe('WellListComponent', () => {
  let component: WellListComponent;
  let service: MockWellService;
  let fixture: ComponentFixture<WellListComponent>;

  beforeEach(async(() => {
    service = new MockWellService();
 
    TestBed.configureTestingModule({
      declarations: [ WellListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new MockWellService();

    fixture = TestBed.createComponent(WellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get well data', () => {
    service = new MockWellService();

    const wells = service.getWellData();
    expect( wells.length ).toEqual(2);
  });
});
