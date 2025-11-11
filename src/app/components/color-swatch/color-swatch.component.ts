import { Component, Input } from '@angular/core';
import { IColor } from '../../models/color';

@Component({
  selector: 'app-color-swatch',
  standalone: true,
  imports: [],
  templateUrl: './color-swatch.component.html',
  styleUrl: './color-swatch.component.css',
})
export class ColorSwatchComponent {
  @Input({ required: true }) color?: IColor;
}
