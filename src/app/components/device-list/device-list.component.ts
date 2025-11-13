import { Component, Input } from '@angular/core';
import { DeviceFilterController } from '../../controllers/device-filter-controller';

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css',
})
export class DeviceListComponent {
  @Input({ required: true }) filterController?: DeviceFilterController;
}
