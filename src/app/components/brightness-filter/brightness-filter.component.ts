import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FilterObservables, IStringFilterOption } from '../../models/filter';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brightness-filter',
  standalone: true,
  imports: [],
  templateUrl: './brightness-filter.component.html',
  styleUrl: './brightness-filter.component.css',
})
export class BrightnessFilterComponent implements OnInit, OnDestroy {
  @Input({ required: true }) filterData?: FilterObservables;
  options?: IStringFilterOption[];
  selectedValue?: number;
  private readonly _subs: Subscription = new Subscription();

  ngOnInit(): void {
    this.setupFilter();
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  setupFilter = () => {
    if (!this.filterData || this.filterData.kind !== 'string') {
      return;
    }

    const optionsObservable$ = this.filterData.optionsObservable;
    if (!optionsObservable$) {
      return;
    }

    const optionsSub = optionsObservable$.subscribe((options) => {
      this.options = options;
    });
    this._subs.add(optionsSub);
  };
}
