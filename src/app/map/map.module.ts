import { NgModule } from '@angular/core';
import {MapComponent} from './map.component';
import {MapRoutingModule} from './map-routing.module';



@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
        MapRoutingModule
        ],
    providers: [],
})
export class MapModule {
}
