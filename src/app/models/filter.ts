export enum FilterTypeEnum {
  Site = 'site',
  Zone = 'zone',
}

export interface ISite {
  id: number;
  name: string;
}

export interface IZone {
  id: number;
  siteId: number;
  name: string;
}

export interface IDevice {
  id: number;
  siteId: number;
  zoneId: number;
  name: string;
}

export interface IFilterParams {
  site: ISite | null;
  zone: IZone | null;
}

export interface IFilterOptions {
  site: ISite[];
  zone: IZone[];
}

export type FilterOptionType = ISite | IZone;
