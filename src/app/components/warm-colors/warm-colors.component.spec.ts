import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmColorsComponent } from './warm-colors.component';

describe('WarmColorsComponent', () => {
  let component: WarmColorsComponent;
  let fixture: ComponentFixture<WarmColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarmColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarmColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
