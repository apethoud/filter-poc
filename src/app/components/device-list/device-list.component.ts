import { Component, Input, OnInit } from '@angular/core';
import { DeviceFilterController } from '../../controllers/device-filter-controller';
import { IDevice, IFilterParams } from '../../models/filter';
import { getDevices } from '../../mock-api/mock-api';

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css',
})
export class DeviceListComponent implements OnInit {
  @Input({ required: true }) filterController?: DeviceFilterController;
  devices: IDevice[] = [];

  ngOnInit(): void {
    this.fetchDevices();
  }

  fetchDevices = () => {
    if (!this.filterController?.filterParams) {
      console.log('Error: No filter params in fetchDevices.');
      return;
    }

    const params: IFilterParams = this.filterController.filterParams;
    this.devices = getDevices(params);
  };
}
