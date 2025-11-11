import { Component, OnInit } from '@angular/core';
import { colorOptions } from '../../mock-api/api';
import { IColor } from '../../models/color';
import { ColorSwatchComponent } from '../color-swatch/color-swatch.component';
import { colorNameAlphabeticSorter } from '../../utils/utils';
import { FilterMenuComponent } from '../filter-menu/filter-menu.component';
import { WarmColorsFilterController } from '../../controllers/warm-colors-filter-controller';

@Component({
  selector: 'app-warm-colors',
  standalone: true,
  imports: [ColorSwatchComponent, FilterMenuComponent],
  templateUrl: './warm-colors.component.html',
  styleUrl: './warm-colors.component.css',
})
export class WarmColorsComponent implements OnInit {
  colors: IColor[] = [];
  protected readonly warmColorsFilterController =
    new WarmColorsFilterController();

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
