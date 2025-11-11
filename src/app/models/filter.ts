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

export type FilterObservables =
  | {
      kind: 'string';
      optionsObservable: Observable<IStringFilterOption[]>;
      selectedOptionsObservable: Observable<number[]>;
    }
  | {
      kind: 'boolean';
      optionsObservable: Observable<IBooleanFilterOption[]>;
      selectedOptionsObservable: Observable<number[]>;
    };

export type FilterListType = Map<FilterTypeEnum, FilterObservables>;
