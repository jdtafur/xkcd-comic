import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {ToggleItemDirective} from './toggle-item.directive';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  @Input() activeSelector: any = '';
  @Output() activeSelectorChange: EventEmitter<any> = new EventEmitter<any>();

  protected items: Array<ToggleItemDirective> = [];

  constructor() { }

  unselectOtherItems(selectedItem: ToggleItemDirective): void {
    this.items.forEach((item: ToggleItemDirective) => {
      if (item.selector !== selectedItem.selector) {
        item.selected = false;
      }
    });
  }

  selectedChange(item: ToggleItemDirective): void {
    this.activeSelector = item.selector;
    this.activeSelectorChange.emit(this.activeSelector);
  }
}
