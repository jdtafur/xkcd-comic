import {Directive, HostBinding, HostListener, Inject, Input} from '@angular/core';
import {ToggleDirective} from './toggle.directive';

@Directive({
  selector: '[appToggleItem]'
})
export class ToggleItemDirective {

  protected _selected!: boolean;
  protected items: ToggleDirective;
  @Input()
  selector!: string;

  @HostBinding('class.selected')
  @Input()
  get selected(): boolean {
    return this._selected;
  }

  set selected(value: boolean) {
    this._selected = value;

    if (value) {
      this.items.unselectOtherItems(this);
      this.items.selectedChange(this);
    }
  }

  @HostListener('click', ['$event'])
  onClick(e: any): void {
    if (this.items.activeSelector !== this.selector) {
      this.selected = !this.selected;
    }
  }

  public constructor(@Inject(ToggleDirective) level: ToggleDirective) {
    this.items = level;
  }
}
