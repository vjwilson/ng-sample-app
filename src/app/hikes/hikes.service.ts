import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Hike } from './hike';

@Injectable()
export class HikesService {
  private hikesUrl = 'http://localhost:3009/hikes';

  constructor(private http: HttpClient) {}

  getHikes(): Observable<Hike[]> {
    return this.http.get<Hike[]>(this.hikesUrl)
      .do(data => console.log('Hikes data' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getHike(id: number): Observable<Hike> {
    return this.http.get<Hike>(`${this.hikesUrl}/${id}`)
      .do(data => console.log('Hike data' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);

  }
}
