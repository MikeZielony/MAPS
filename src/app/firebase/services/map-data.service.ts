import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MapResultModel } from '../model-fb/model-fb.module';
import { IMapResultDto } from '../model-fb/fbResultDTO';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapDataService {

  constructor(
      private http: HttpClient
  ) {
  }

  public getMapResult(): Observable<MapResultModel[]> {
    return this.http.get<IMapResultDto[]>(`${environment.apiUrl}/assets/mock_api/mapResults.json`)
        .pipe(
            map(results => results.map(result => new MapResultModel(result)))
        );
  }
}
