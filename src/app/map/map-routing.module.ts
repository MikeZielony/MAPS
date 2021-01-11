import {Routes, RouterModule} from '@angular/router';
import {MapComponent} from './map.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
        path: 'map',
        component: MapComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MapRoutingModule {

}
