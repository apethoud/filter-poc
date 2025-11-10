import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolColorsComponent } from './cool-colors.component';

describe('CoolColorsComponent', () => {
  let component: CoolColorsComponent;
  let fixture: ComponentFixture<CoolColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoolColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
