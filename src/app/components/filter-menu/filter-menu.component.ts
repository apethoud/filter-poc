import { Component, Input, OnInit } from '@angular/core';
import { BrightnessFilterComponent } from '../brightness-filter/brightness-filter.component';
import {
  FilterListType,
  FilterObservables,
  FilterTypeEnum,
} from '../../models/filter';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filter-menu',
  standalone: true,
  imports: [BrightnessFilterComponent],
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.css',
})
export class FilterMenuComponent implements OnInit {
  @Input({ required: true }) filterList?: FilterListType;
  readonly triggerSave$ = new Subject<void>();

  showBrightnessFilter?: boolean;

  brightnessFilterData?: FilterObservables;

  ngOnInit(): void {
    if (!this.filterList) {
      return;
    }
    this.showBrightnessFilter = this.filterList.has(FilterTypeEnum.Brightness);
    if (this.showBrightnessFilter) {
      const brightnessFilterData = this.filterList.get(
        FilterTypeEnum.Brightness
      );
      if (!brightnessFilterData) {
        return;
      }
      this.brightnessFilterData = brightnessFilterData;
    }
  }

  triggerSaveAction = () => {
    this.triggerSave$.next();
  };
}
