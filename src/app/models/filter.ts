import { Observable } from 'rxjs';

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

export interface IStringFilterObservables {
  optionsObservable: Observable<IStringFilterOption[]>;
  selectedOptionsObservable: Observable<number[]>;
}

export interface IBooleanFilterObservables {
  optionsObservable: Observable<IBooleanFilterOption[]>;
  selectedOptionsObservable: Observable<number[]>;
}

export type FilterListType = Map<
  FilterTypeEnum,
  IStringFilterObservables | IBooleanFilterObservables
>;
