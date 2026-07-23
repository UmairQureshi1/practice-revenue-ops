import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSupportComponent } from './hospital-support.component';

describe('HospitalSupportComponent', () => {
  let component: HospitalSupportComponent;
  let fixture: ComponentFixture<HospitalSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
