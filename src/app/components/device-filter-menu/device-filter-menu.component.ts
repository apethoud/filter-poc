import { Component, Input, OnInit } from '@angular/core';
import { FilterFieldComponent } from '../filter-field/filter-field.component';
// import {
//   FilterListType,
//   FilterObservables,
//   FilterTypeEnum,
// } from '../../models/filter';
import { Subject } from 'rxjs';
import { DeviceFilterController } from '../../controllers/device-filter-controller';
import { FilterOptionType, ISite, IZone } from '../../models/filter';
import {
  iSiteArrayToSiteNameStringArrayMapper,
  iZoneArrayToZoneNameStringArrayMapper,
  siteNameStringToISiteMapper,
  zoneNameStringToIZoneMapper,
} from '../../utils/utils';

@Component({
  selector: 'app-device-filter-menu',
  standalone: true,
  imports: [FilterFieldComponent],
  templateUrl: './device-filter-menu.component.html',
  styleUrl: './device-filter-menu.component.css',
})
export class DeviceFilterMenuComponent implements OnInit {
  @Input({ required: true }) filterController?: DeviceFilterController;
  // @Input({ required: true }) filterList?: FilterListType;
  // readonly triggerSave$ = new Subject<void>();
  siteOptions: string[] = [];
  zoneOptions: string[] = [];

  selectedSiteName?: string;
  selectedZoneName?: string;

  // showBrightnessFilter?: boolean;

  // brightnessFilterData?: FilterObservables;

  ngOnInit(): void {
    this.prepareSiteOptions();
    this.prepareZoneOptions();

    this.prepareSelectedSite();
    this.prepareSelectedZone();
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

  // Prepare Field Options

  prepareSiteOptions = () => {
    if (!this.filterController || !this.filterController.filterOptions.site) {
      return;
    }
    this.siteOptions = iSiteArrayToSiteNameStringArrayMapper(
      this.filterController.filterOptions.site
    );
  };

  prepareZoneOptions = () => {
    if (!this.filterController || !this.filterController.filterOptions.zone) {
      return;
    }
    this.zoneOptions = iZoneArrayToZoneNameStringArrayMapper(
      this.filterController.filterOptions.zone
    );
  };

  // Prepare Selected Options

  prepareSelectedSite = () => {
    if (!this.filterController?.pendingFilterParams.site?.name) {
      return;
    }
    this.selectedSiteName = this.filterController.pendingFilterParams.site.name;
  };

  prepareSelectedZone = () => {
    if (!this.filterController?.pendingFilterParams.zone?.name) {
      return;
    }
    this.selectedZoneName = this.filterController.pendingFilterParams.zone.name;
  };

  // Set Selected Options to Controller

  setPendingSelectedSiteToController = (siteName: string): void => {
    if (!this.filterController) {
      return;
    }
    const selectedSite = siteNameStringToISiteMapper(
      siteName,
      this.filterController.filterOptions.site
    );
    this.filterController.pendingFilterParams.site = selectedSite;
  };

  setPendingSelectedZoneToController = (zoneName: string): void => {
    if (!this.filterController) {
      return;
    }
    const selectedZone = zoneNameStringToIZoneMapper(
      zoneName,
      this.filterController.filterOptions.zone
    );
    this.filterController.pendingFilterParams.zone = selectedZone;
  };

  // setPendingSelectedSite = (val: ISite) => {
  //   if (!this.filterController?.pendingFilterParams?.site) {
  //     return;
  //   }
  //   this.filterController.pendingFilterParams.site = val;
  //   console.log(
  //     'this.filterController.pendingFilterParams.site: ',
  //     this.filterController.pendingFilterParams.site
  //   );
  // };

  // setPendingSelectedZone = (val: IZone) => {
  //   console.log('OOOOO val: ', val);
  //   // if (!this.filterController?.pendingFilterParams?.zone) {
  //   //   return;
  //   // }
  //   if (!this.filterController) {
  //     return;
  //   }
  //   this.filterController.pendingFilterParams.zone = val;
  //   console.log(
  //     'this.filterController.pendingFilterParams.zone: ',
  //     this.filterController.pendingFilterParams.zone
  //   );
  // };

  // setSelectedValue = (val: FilterOptionType) => {
  //   if (isZone(val)) {
  //     this.setPendingSelectedZone(val);
  //   } else {
  //     this.setPendingSelectedSite(val);
  //   }
  // }

  triggerSaveAction = (): void => {
    if (!this.filterController) {
      return;
    }
    this.filterController.savePendingFilterParams();
    // this.triggerSave$.next();
  };
}
