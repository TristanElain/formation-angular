import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {CollectionService} from './core/services/collection.service';
import {HomeModule} from './home/home.module';
import {ItemsModule} from './items/items.module';
import {PageNotFoundModule} from './page-not-found/page-not-found.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule, SharedModule, CoreModule, NgbModule.forRoot(),
    PageNotFoundModule, HomeModule, ItemsModule
  ],
  declarations: [AppComponent],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class
 AppModule {}
