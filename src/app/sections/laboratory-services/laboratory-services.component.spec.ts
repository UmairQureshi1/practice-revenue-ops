import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryServicesComponent } from './laboratory-services.component';

describe('LaboratoryServicesComponent', () => {
  let component: LaboratoryServicesComponent;
  let fixture: ComponentFixture<LaboratoryServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
