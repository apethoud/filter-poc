import { Observable, Subject } from 'rxjs';
import {
  FilterListType,
  FilterTypeEnum,
  IBooleanFilterObservables,
  IStringFilterObservables,
  IStringFilterOption,
} from '../models/filter';

export class WarmColorsController {
  allBrightnessOptions$: Observable<IStringFilterOption[]>;
  selectedBrightnessOptions$: Observable<number[]>;
  private readonly _allBrightnessOptionsSubject = new Subject<
    IStringFilterOption[]
  >();
  private readonly _selectedBrightnessOptionsSubject = new Subject<number[]>();

  warmColorsFilterList?: FilterListType;

  constructor() {
    this.allBrightnessOptions$ =
      this._allBrightnessOptionsSubject.asObservable();
    this.selectedBrightnessOptions$ =
      this._selectedBrightnessOptionsSubject.asObservable();

    this.warmColorsFilterList = new Map<
      FilterTypeEnum,
      IStringFilterObservables | IBooleanFilterObservables
    >([
      [
        FilterTypeEnum.Brightness,
        {
          optionsObservable: this.allBrightnessOptions$,
          selectedOptionsObservable: this.selectedBrightnessOptions$,
        },
      ],
    ]);
  }
}
