import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent} from './app.component';
import {MapRoutingModule} from './map/map-routing.module';
import {MapModule} from './map/map.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MapRoutingModule, MapModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
