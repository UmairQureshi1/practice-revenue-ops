import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTrustedPlatformsComponent } from './hr-trusted-platforms.component';

describe('HrTrustedPlatformsComponent', () => {
  let component: HrTrustedPlatformsComponent;
  let fixture: ComponentFixture<HrTrustedPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrTrustedPlatformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrTrustedPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
