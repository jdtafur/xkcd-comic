import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToggleDirective} from './toggle.directive';
import {ToggleItemDirective} from './toggle-item.directive';

@NgModule({
  declarations: [ToggleDirective, ToggleItemDirective],
  imports: [
    CommonModule
  ],
  exports: [ToggleDirective, ToggleItemDirective]
})
export class ToggleModule { }
