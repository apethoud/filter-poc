import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DeviceFilterController } from '../../controllers/device-filter-controller';
import { IDevice, IFilterParams } from '../../models/filter';
import { getDevices } from '../../mock-api/mock-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css',
})
export class DeviceListComponent implements OnInit, OnDestroy {
  @Input({ required: true }) filterController?: DeviceFilterController;
  devices: IDevice[] = [];
  private readonly _subs: Subscription = new Subscription();

  ngOnInit(): void {
    if (!this.filterController) {
      return;
    }
    const filterParamsSub = this.filterController.filterParams$.subscribe(
      (params) => {
        this.updateDeviceList(params);
      }
    );
    this._subs.add(filterParamsSub);
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  updateDeviceList = (filterParams: IFilterParams) => {
    this.devices = getDevices(filterParams);
  };
}
