import { Component, Input, OnDestroy, OnInit } from '@angular/core';
// import {
//   FilterKind,
//   FilterObservables,
//   IStringFilterOption,
// } from '../../models/filter';
import { Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FilterOptionType } from '../../models/filter';

@Component({
  selector: 'app-filter-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-field.component.html',
  styleUrl: './filter-field.component.css',
})
export class FilterFieldComponent implements OnInit, OnDestroy {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) options?: FilterOptionType[];
  @Input({ required: true }) selectedValue?: FilterOptionType | null;
  // @Input({ required: true }) saveSelectedValue?: (val: FilterOptionType) => void;
  // @Input({ required: true }) triggerSave$: Observable<void>;

  // @Input({ required: true }) filterData?: FilterObservables;
  // @Input({ required: true }) triggerSave?: Observable<void>;
  // filterName: string = 'Brightness';
  // filterKind: FilterKind = FilterKind.String;
  // options?: IStringFilterOption[];
  // selectedValue?: string;
  // private readonly _subs: Subscription = new Subscription();

  ngOnInit(): void {
    //   this.setupFilter();
    //   this.subscribeToSaveEvents();
  }

  ngOnDestroy(): void {
    //   this._subs.unsubscribe();
  }

  // setupFilter = () => {
  //   if (!this.filterData || this.filterData.kind !== 'string') {
  //     return;
  //   }

  //   const optionsObservable$ = this.filterData.optionsObservable;
  //   const selectedOptionsObservable$ =
  //     this.filterData.selectedOptionsObservable;
  //   if (!optionsObservable$ || !selectedOptionsObservable$) {
  //     return;
  //   }

  //   const optionsSub = optionsObservable$.subscribe((options) => {
  //     this.options = options;
  //   });
  //   this._subs.add(optionsSub);

  //   const selectedOptionsSub = selectedOptionsObservable$.subscribe(
  //     (selectedOptions) => {
  //       if (!selectedOptions || !selectedOptions[0]) {
  //         return;
  //       }
  //       this.selectedValue = selectedOptions[0].toString();
  //     }
  //   );
  //   this._subs.add(selectedOptionsSub);
  // };

  // subscribeToSaveEvents = () => {
  //   if (!this.triggerSave) {
  //     return;
  //   }

  //   this.triggerSave.subscribe(() => {
  //     this.saveSelectedValueToController();
  //   });
  // };

  // saveSelectedValueToController = () => {
  //   if (!this.filterData || !this.selectedValue) {
  //     return;
  //   }
  //   const numberArrayPayload = [parseInt(this.selectedValue)];
  //   console.log('AAP typeof this.selectedValue: ', typeof this.selectedValue);
  //   this.filterData.selectedOptionsUpdater(numberArrayPayload);
  // };

  // on form save trigger, call the selectedOptionsUpdater with the new values (if any)
  // subscribe to the selectedOptions observable to update the dropdown view with the selected value (don't do it on option select)
  // i can use the same selectedValue variable for both the selected value and the pending selected value because new updates
  // coming in via the subscription should overwrite the current selected value and the pending selected value won't be overwritten
  // until a new value comes in via the subscription
  // --> update the main content view in response to the saved filter value
  // --> replicate everywhere
}
