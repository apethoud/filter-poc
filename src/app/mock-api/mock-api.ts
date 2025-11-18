import { IDevice, IFilterParams } from '../models/filter';
import { devices as mockDataDevices, sites, zones } from './mock-data';

export const getSites = () => {
  return sites;
};

export const getZones = () => {
  return zones;
};

export const getDevices = (filterParams: IFilterParams) => {
  let devices = mockDataDevices;
  if (!filterParams) {
    return devices;
  }
  if (filterParams.site) {
    devices = filterDevicesBySiteId(filterParams.site.id, devices);
  }
  if (filterParams.zone) {
    devices = filterDevicesByZoneId(filterParams.zone.id, devices);
  }
  return devices;
};

const filterDevicesBySiteId = (siteId: number, devices: IDevice[]) => {
  return devices.filter((d) => d.siteId === siteId);
};

const filterDevicesByZoneId = (zoneId: number, devices: IDevice[]) => {
  return devices.filter((d) => d.zoneId === zoneId);
};
