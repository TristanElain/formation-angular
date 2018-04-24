import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ItemComponent} from './components/item/item.component';
import {NavComponent} from './components/nav/nav.component';
import {StateDirective} from './directives/state.directive';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [NavComponent, ItemComponent, StateDirective],
  exports: [NavComponent, ItemComponent]
})
export class SharedModule {
}
