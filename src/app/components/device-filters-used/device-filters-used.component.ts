import { Component, Input, OnInit } from '@angular/core';
import { DeviceFilterController } from '../../controllers/device-filter-controller';
import { Subscription } from 'rxjs';
import { IFilterParams } from '../../models/filter';

interface IFilter {
  key: string;
  value: string;
}

@Component({
  selector: 'app-device-filters-used',
  standalone: true,
  imports: [],
  templateUrl: './device-filters-used.component.html',
  styleUrl: './device-filters-used.component.css',
})
export class DeviceFiltersUsedComponent implements OnInit {
  @Input({ required: true }) filterController?: DeviceFilterController;
  private readonly _subs: Subscription = new Subscription();
  filters: IFilter[] = [];

  ngOnInit(): void {
    if (!this.filterController) {
      return;
    }
    this.filterController.filterParams$.subscribe((params: IFilterParams) => {
      if (!params) {
        return;
      }
      this.updateFilters(params);
    });
  }

  updateFilters = (params: IFilterParams) => {
    const updatedFilters: IFilter[] = [];
    for (const [key, value] of Object.entries(params)) {
      if (!value) {
        continue;
      }
      updatedFilters.push({
        key,
        value: value.name,
      });
    }
    this.filters = updatedFilters;
  };
}
