import { Component, OnInit } from '@angular/core';
import { colorOptions } from '../../mock-api/api';
import { IColor } from '../../models/color';
import { ColorSwatchComponent } from '../color-swatch/color-swatch.component';
import { colorNameAlphabeticSorter } from '../../utils/utils';
import { FilterMenuComponent } from '../filter-menu/filter-menu.component';
import { ColorFilterController } from '../../controllers/color-filter-controller';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [ColorSwatchComponent, FilterMenuComponent],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css',
})
export class DevicesComponent implements OnInit {
  colors: IColor[] = [];
  protected readonly colorFilterController = new ColorFilterController();

  ngOnInit(): void {
    this.colors = this.getAllWarmColors();
  }

  getAllWarmColors = () => {
    const warmColors: IColor[] = [];
    for (const color of colorOptions) {
      if (color.temperature === 'warm') {
        warmColors.push(color);
      }
    }
    return warmColors.sort(colorNameAlphabeticSorter);
  };
}
