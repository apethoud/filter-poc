import { IFilterParams } from '../models/filter';
import { devices, sites, zones } from './mock-data';

export const getSites = () => {
  return sites;
};

export const getZones = () => {
  return zones;
};

export const getDevices = (filterParams: IFilterParams) => {
  return devices;
};
