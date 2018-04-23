import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ItemComponent} from './components/item/item.component';
import {NavComponent} from './components/nav/nav.component';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [NavComponent, ItemComponent],
  exports: [NavComponent, ItemComponent]
})
export class SharedModule {
}
