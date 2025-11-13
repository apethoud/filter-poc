import { Observable } from 'rxjs';

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

export interface IStringFilterOption {
  id: number;
  value: string;
  name: string;
}

export interface IBooleanFilterOption {
  id: number;
  value: boolean;
  name: string;
}

export enum FilterTypeEnum {
  Brightness = 'Brightness',
  Hue = 'Hue',
  NamedAfterAFlower = 'Named After a Flower',
  NamedAfterAFood = 'Named After a Food',
}

export enum FilterKind {
  String = 'string',
  Boolean = 'boolean',
}

export type FilterObservables =
  | {
      kind: FilterKind.String;
      optionsObservable: Observable<IStringFilterOption[]>;
      selectedOptionsObservable: Observable<number[]>;
      selectedOptionsUpdater: (selectedIndexes: number[]) => void;
    }
  | {
      kind: FilterKind.Boolean;
      optionsObservable: Observable<IBooleanFilterOption[]>;
      selectedOptionsObservable: Observable<number[]>;
      selectedOptionsUpdater: (selectedIndexes: number[]) => void;
    };

export type FilterListType = Map<FilterTypeEnum, FilterObservables>;
