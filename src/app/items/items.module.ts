import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {ListItemsComponent} from './containers/list-items/list-items.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ListItemsComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule {
}
