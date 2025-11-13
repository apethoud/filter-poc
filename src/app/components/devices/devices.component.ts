import { Component, OnInit } from '@angular/core';
// import { colorOptions } from '../../mock-api/api';
import { IColor } from '../../models/color';
import { ColorSwatchComponent } from '../color-swatch/color-swatch.component';
import { colorNameAlphabeticSorter } from '../../utils/utils';
import { FilterMenuComponent } from '../filter-menu/filter-menu.component';
import { DeviceFilterController } from '../../controllers/device-filter-controller';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [ColorSwatchComponent, FilterMenuComponent],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css',
})
export class DevicesComponent implements OnInit {
  protected readonly deviceFilterController = new DeviceFilterController();

  ngOnInit(): void {}
}
