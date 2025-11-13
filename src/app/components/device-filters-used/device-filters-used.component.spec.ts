import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceFiltersUsedComponent } from './device-filters-used.component';

describe('DeviceFiltersUsedComponent', () => {
  let component: DeviceFiltersUsedComponent;
  let fixture: ComponentFixture<DeviceFiltersUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceFiltersUsedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceFiltersUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
