import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NavComponent} from './components/nav/nav.component';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class SharedModule {
}
