import { Component, Input, OnInit } from '@angular/core';
import { BrightnessFilterComponent } from '../brightness-filter/brightness-filter.component';
// import {
//   FilterListType,
//   FilterObservables,
//   FilterTypeEnum,
// } from '../../models/filter';
import { Subject } from 'rxjs';
import { DeviceFilterController } from '../../controllers/device-filter-controller';

@Component({
  selector: 'app-device-filter-menu',
  standalone: true,
  imports: [BrightnessFilterComponent],
  templateUrl: './device-filter-menu.component.html',
  styleUrl: './device-filter-menu.component.css',
})
export class DeviceFilterMenuComponent implements OnInit {
  @Input({ required: true }) filterController?: DeviceFilterController;
  // @Input({ required: true }) filterList?: FilterListType;
  // readonly triggerSave$ = new Subject<void>();

  // showBrightnessFilter?: boolean;

  // brightnessFilterData?: FilterObservables;

  ngOnInit(): void {
    //   if (!this.filterList) {
    //     return;
    //   }
    //   this.showBrightnessFilter = this.filterList.has(FilterTypeEnum.Brightness);
    //   if (this.showBrightnessFilter) {
    //     const brightnessFilterData = this.filterList.get(
    //       FilterTypeEnum.Brightness
    //     );
    //     if (!brightnessFilterData) {
    //       return;
    //     }
    //     this.brightnessFilterData = brightnessFilterData;
    //   }
  }

  // triggerSaveAction = () => {
  //   this.triggerSave$.next();
  // };
}
