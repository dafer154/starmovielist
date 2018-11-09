import { Injectable } from '@angular/core';
import { API_KEY } from '../../app.key';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  /*Api key david*/
  apiKey: string = API_KEY;

  /*End point more popular series and movies in the week */
  baseURL = 'https://api.themoviedb.org/3/trending/all/week?';

  baseURLPerson = 'https://api.themoviedb.org/3/person/';

  constructor(private http: HttpClient) {}

  trendingTopicWeek(): Observable<any> {
    return this.http
      .get(`${this.baseURL}api_key=${this.apiKey}`)
      .catch(this.errorHandler);
  }

  popularPeople(): Observable<any> {
    const popular = 'popular?';
    return this.http
      .get(`${this.baseURLPerson}${popular}api_key=${this.apiKey}`)
      .catch(this.errorHandler);
  }

  private errorHandler(error: Response) {
    console.error('An error occurred', error);
    return Observable.throw(error.statusText);
  }
}
