import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpandSupportComponent } from './helpand-support.component';

describe('HelpandSupportComponent', () => {
  let component: HelpandSupportComponent;
  let fixture: ComponentFixture<HelpandSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpandSupportComponent]
    });
    fixture = TestBed.createComponent(HelpandSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
