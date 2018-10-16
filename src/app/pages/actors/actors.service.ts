import { Injectable } from "@angular/core";
import { API_KEY } from "../../app.key";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: "root"
})
export class ActorsService {
  /*Api key david*/
  apiKey: string = API_KEY;

  /*Endpoint for Actors */

  baseURL = 'https://api.themoviedb.org/3/person/';

  constructor(private http: Http) {}

  popularPeople(): Observable<any> {
    const popular = 'popular?';
    return this.http
      .get(`${this.baseURL}${popular}api_key=${this.apiKey}`)
      .map(response => {
        return response.json().results;
      }).catch(this.errorHandler);
  }

  actorsMovieCredits(id: string): Observable<any> {
    const credits = '/movie_credits?';
    return this.http
      .get(`${this.baseURL}${id}${credits}api_key=${this.apiKey}`)
      .map(response => {
        return response.json().results;
      }).catch(this.errorHandler);
  }

  private errorHandler(error: Response) {
    console.error('An error occurred', error);
    return Observable.throw(error.statusText);
  }
}
