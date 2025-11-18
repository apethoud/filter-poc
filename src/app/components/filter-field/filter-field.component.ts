import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-field.component.html',
  styleUrl: './filter-field.component.css',
})
export class FilterFieldComponent {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) options?: string[];
  @Input({ required: true }) selectedValue?: string | null;
  @Input({ required: true }) setSelectedValue?: (val: string) => void;

  handleFilterFieldChange = (event: Event) => {
    if (!this.setSelectedValue) {
      return;
    }
    const target = event.target as HTMLSelectElement;
    this.setSelectedValue(target.value);
  };
}
