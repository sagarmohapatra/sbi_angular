import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicedeliveryComponent } from './devicedelivery.component';

describe('DevicedeliveryComponent', () => {
  let component: DevicedeliveryComponent;
  let fixture: ComponentFixture<DevicedeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevicedeliveryComponent]
    });
    fixture = TestBed.createComponent(DevicedeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
