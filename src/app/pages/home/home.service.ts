import { Injectable } from '@angular/core';
import {API_KEY} from '../../app.key';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  /*Array movies */

  principalMovies = [];
  /*Api key david*/
  apiKey: string = API_KEY;
  /*End point more popular series and movies in the week */

  baseURL = 'https://api.themoviedb.org/3/trending/all/week?';

  constructor(private http: Http) { }

  trendingTopicWeek(): Promise<any[]> {
    return this.http.get(`${this.baseURL}api_key=${this.apiKey}`).map(res =>{
      this.principalMovies = res.json();
      console.log(this.principalMovies);
    })
}