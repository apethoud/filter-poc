import { IColor } from '../models/color';
import {
  // IBooleanFilterOption,
  IDevice,
  ISite,
  // IStringFilterOption,
  IZone,
} from '../models/filter';

export const sites: ISite[] = [
  {
    id: 1,
    name: 'Lakeview',
  },
  {
    id: 2,
    name: 'Riverside',
  },
];

export const zones: IZone[] = [
  {
    id: 1,
    siteId: 1,
    name: 'North',
  },
  {
    id: 2,
    siteId: 1,
    name: 'South',
  },
  {
    id: 3,
    siteId: 2,
    name: 'East',
  },
  {
    id: 4,
    siteId: 2,
    name: 'West',
  },
];

export const devices: IDevice[] = [
  {
    id: 1,
    siteId: 1,
    zoneId: 1,
    name: 'Lakeview North Cam 1',
  },
  {
    id: 2,
    siteId: 1,
    zoneId: 1,
    name: 'Lakeview North Cam 2',
  },
  {
    id: 3,
    siteId: 1,
    zoneId: 2,
    name: 'Lakeview South Cam 1',
  },
  {
    id: 4,
    siteId: 1,
    zoneId: 2,
    name: 'Lakeview South Cam 2',
  },
  {
    id: 5,
    siteId: 2,
    zoneId: 3,
    name: 'Riverside East Cam 1',
  },
  {
    id: 6,
    siteId: 2,
    zoneId: 3,
    name: 'Riverside East Cam 2',
  },
  {
    id: 7,
    siteId: 2,
    zoneId: 4,
    name: 'Riverside West Cam 1',
  },
  {
    id: 8,
    siteId: 2,
    zoneId: 4,
    name: 'Riverside West Cam 2',
  },
];
