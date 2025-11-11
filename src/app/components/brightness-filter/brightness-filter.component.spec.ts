import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightnessFilterComponent } from './brightness-filter.component';

describe('BrightnessFilterComponent', () => {
  let component: BrightnessFilterComponent;
  let fixture: ComponentFixture<BrightnessFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightnessFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrightnessFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
