import { IFilterParams } from '../models/filter';
import { devices } from './mock-data';

export const getDevices = (filterParams: IFilterParams) => {
  console.log('filterParams: ', filterParams);
  return devices;
};
