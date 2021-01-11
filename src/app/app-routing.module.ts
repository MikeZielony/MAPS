import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

const routes: Routes = [{
  path: 'map',
  loadChildren: () => import('./map/map.module').then(m => m.MapModule)
},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

