import { IFilterParams } from '../models/filter';
import { devices, sites, zones } from './mock-data';

export const getSites = () => {
  console.log('sites: ', sites);
  return sites;
};

export const getZones = () => {
  console.log('zones: ', zones);
  return zones;
};

export const getDevices = (filterParams: IFilterParams) => {
  console.log('filterParams: ', filterParams);
  console.log('devices: ', devices);
  return devices;
};
