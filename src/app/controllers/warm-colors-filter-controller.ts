import { Observable, BehaviorSubject } from 'rxjs';
import {
  FilterListType,
  FilterTypeEnum,
  IStringFilterOption,
} from '../models/filter';
import { brightnessOptions } from '../mock-api/api';

export class WarmColorsFilterController {
  allBrightnessOptions$: Observable<IStringFilterOption[]>;
  selectedBrightnessOptions$: Observable<number[]>;
  private readonly _allBrightnessOptionsSubject = new BehaviorSubject<
    IStringFilterOption[]
  >([]);
  private readonly _selectedBrightnessOptionsSubject = new BehaviorSubject<
    number[]
  >([]);

  warmColorsFilterList?: FilterListType;

  constructor() {
    this.allBrightnessOptions$ =
      this._allBrightnessOptionsSubject.asObservable();
    this.selectedBrightnessOptions$ =
      this._selectedBrightnessOptionsSubject.asObservable();

    this.warmColorsFilterList = new Map([
      [
        FilterTypeEnum.Brightness,
        {
          kind: 'string',
          optionsObservable: this.allBrightnessOptions$,
          selectedOptionsObservable: this.selectedBrightnessOptions$,
        },
      ],
    ]);

    this._allBrightnessOptionsSubject.next(brightnessOptions);
  }
}
