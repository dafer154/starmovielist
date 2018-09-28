import { Injectable } from '@angular/core';
import {API_KEY} from '../../app.key';
import { Observable } from 'rxjs';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  /*Api key david*/
  apiKey: string = API_KEY;
  /*End point more popular series and movies in the week */

  baseURL = 'https://api.themoviedb.org/3/trending/all/week?';

  constructor(private http: Http) { }

  trendingTopicWeek(): Observable<any> {
    return this.http.get(`${this.baseURL}api_key=${this.apiKey}`)
      .map(response => {
      return response.json().results; });
    }
}
