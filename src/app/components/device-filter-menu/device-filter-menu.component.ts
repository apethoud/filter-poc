import { Component, Input, OnInit } from '@angular/core';
import { FilterFieldComponent } from '../filter-field/filter-field.component';
import { DeviceFilterController } from '../../controllers/device-filter-controller';
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
  siteOptions: string[] = [];
  zoneOptions: string[] = [];

  selectedSiteName?: string;
  selectedZoneName?: string;

  ngOnInit(): void {
    this.prepareSiteOptions();
    this.prepareZoneOptions();

    this.prepareSelectedSite();
    this.prepareSelectedZone();
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

  triggerSaveAction = (): void => {
    if (!this.filterController) {
      return;
    }
    this.filterController.savePendingFilterParams();
  };
}
