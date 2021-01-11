import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent} from './app.component';
import {MapRoutingModule} from './map/map-routing.module';
import {MapModule} from './map/map.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MapRoutingModule, MapModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
