import { Injectable } from '@angular/core';
import {API_KEY} from '../../app.key';
import { Observable } from 'rxjs';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AppHelperService } from '../../app.helper';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  /*Api key david*/
  apiKey: string = API_KEY;
  /*End point more popular series and movies in the week */

  baseURL = 'https://api.themoviedb.org/3/search';

  constructor(private http: Http, 		private appHelper: AppHelperService) { }

  searchMovie(query: string): Observable<any> {
    const movieUrl = '/movie?';
    return this.http.get(`${this.baseURL}${movieUrl}api_key=${this.apiKey}&query=${query}&page=1`)
      .map(response => {
        return response.json().results;
    })
    .catch(this.handleError);
  }
}
