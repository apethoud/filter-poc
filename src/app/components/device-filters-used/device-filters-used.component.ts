import { Component, Input } from '@angular/core';
import { DeviceFilterController } from '../../controllers/device-filter-controller';

@Component({
  selector: 'app-device-filters-used',
  standalone: true,
  imports: [],
  templateUrl: './device-filters-used.component.html',
  styleUrl: './device-filters-used.component.css',
})
export class DeviceFiltersUsedComponent {
  @Input({ required: true }) filterController?: DeviceFilterController;
}
