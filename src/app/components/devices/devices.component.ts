import { Component, OnInit } from '@angular/core';
// import { colorOptions } from '../../mock-api/api';
import { IColor } from '../../models/color';
import { ColorSwatchComponent } from '../color-swatch/color-swatch.component';
import { colorNameAlphabeticSorter } from '../../utils/utils';
import { DeviceFilterMenuComponent } from '../device-filter-menu/device-filter-menu.component';
import { DeviceFilterController } from '../../controllers/device-filter-controller';
import { DeviceFiltersUsedComponent } from '../device-filters-used/device-filters-used.component';
import { DeviceListComponent } from '../device-list/device-list.component';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [
    ColorSwatchComponent,
    DeviceFilterMenuComponent,
    DeviceFiltersUsedComponent,
    DeviceListComponent,
  ],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css',
})
export class DevicesComponent implements OnInit {
  protected readonly deviceFilterController = new DeviceFilterController();

  ngOnInit(): void {}
}
