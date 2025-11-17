import { Observable, BehaviorSubject } from 'rxjs';
import { IFilterOptions, IFilterParams } from '../models/filter';
import { getSites, getZones } from '../mock-api/mock-api';
// import {
//   FilterKind,
//   FilterListType,
//   FilterTypeEnum,
//   IStringFilterOption,
// } from '../models/filter';
// import { brightnessOptions } from '../mock-api/api';

export class DeviceFilterController {
  // filterParams: IFilterParams = {
  //   site: null,
  //   zone: null,
  // };

  pendingFilterParams: IFilterParams = {
    site: null,
    zone: null,
  };

  filterOptions: IFilterOptions = {
    site: [],
    zone: [],
  };
  private readonly _filterParams$ = new BehaviorSubject<IFilterParams>(
    this.pendingFilterParams
  );
  readonly filterParams$ = this._filterParams$.asObservable();

  constructor() {
    this.filterOptions.site = getSites();
    this.filterOptions.zone = getZones();
  }

  savePendingFilterParams = () => {
    // this.filterParams = structuredClone(this.pendingFilterParams);
    this._filterParams$.next(this.pendingFilterParams);
  };

  // setFilterParams = (params: IFilterParams) => {
  //   this.filterParams = params;
  // };

  // setPendingFilterParams = (params: IFilterParams) => {
  //   this.pendingFilterParams = params;
  // };

  // allBrightnessOptions$: Observable<IStringFilterOption[]>;
  // selectedBrightnessOptions$: Observable<number[]>;
  // private readonly _allBrightnessOptionsSubject = new BehaviorSubject<
  //   IStringFilterOption[]
  // >([]);
  // private readonly _selectedBrightnessOptionsSubject = new BehaviorSubject<
  //   number[]
  // >([]);
  // warmColorsFilterList?: FilterListType;
  // constructor() {
  //   this.allBrightnessOptions$ =
  //     this._allBrightnessOptionsSubject.asObservable();
  //   this.selectedBrightnessOptions$ =
  //     this._selectedBrightnessOptionsSubject.asObservable();
  //   this.warmColorsFilterList = new Map([
  //     [
  //       FilterTypeEnum.Brightness,
  //       {
  //         kind: FilterKind.String,
  //         optionsObservable: this.allBrightnessOptions$,
  //         selectedOptionsObservable: this.selectedBrightnessOptions$,
  //         selectedOptionsUpdater: this.updateSelectedBrightnessOptions,
  //       },
  //     ],
  //   ]);
  //   this._allBrightnessOptionsSubject.next(brightnessOptions);
  // }
  // updateSelectedBrightnessOptions = (selectedIndexes: number[]): void => {
  //   console.log('updateSelectedBrightnessOptions called');
  //   console.log('selectedIndexes: ', selectedIndexes);
  //   this._selectedBrightnessOptionsSubject.next(selectedIndexes);
  // };
}
