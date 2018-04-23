import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {PageNotFoundComponent} from './components/pageNotFound/pageNotFound.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent]
})
export class PageNotFoundModule {
}
