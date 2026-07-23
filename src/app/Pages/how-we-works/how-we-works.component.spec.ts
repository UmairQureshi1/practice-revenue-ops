import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeWorksComponent } from './how-we-works.component';

describe('HowWeWorksComponent', () => {
  let component: HowWeWorksComponent;
  let fixture: ComponentFixture<HowWeWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWeWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWeWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
