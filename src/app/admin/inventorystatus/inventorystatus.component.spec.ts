import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorystatusComponent } from './inventorystatus.component';

describe('InventorystatusComponent', () => {
  let component: InventorystatusComponent;
  let fixture: ComponentFixture<InventorystatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorystatusComponent]
    });
    fixture = TestBed.createComponent(InventorystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
