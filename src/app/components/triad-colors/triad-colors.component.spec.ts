import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriadColorsComponent } from './triad-colors.component';

describe('TriadColorsComponent', () => {
  let component: TriadColorsComponent;
  let fixture: ComponentFixture<TriadColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriadColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriadColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
