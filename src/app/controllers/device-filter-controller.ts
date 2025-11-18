import { BehaviorSubject } from 'rxjs';
import { IFilterOptions, IFilterParams } from '../models/filter';
import { getSites, getZones } from '../mock-api/mock-api';

export class DeviceFilterController {
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
    this._filterParams$.next(this.pendingFilterParams);
  };
}
