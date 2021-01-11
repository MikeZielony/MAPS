import { NgModule } from '@angular/core';
import {MapComponent} from './map.component';
import {MapRoutingModule} from './map-routing.module';
import {MapDataService} from './services/map-data.service';
import {BrowserModule} from '@angular/platform-browser';
import { MapResultTypePipe } from './pipes/map-result-type.pipe';



@NgModule({
    declarations: [
        MapComponent,
        MapResultTypePipe
    ],
    imports: [
        MapRoutingModule,
        BrowserModule
    ],
    providers: [
        MapDataService
    ],
})
export class MapModule {
}
