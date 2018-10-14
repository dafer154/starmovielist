import { Injectable } from "@angular/core";
import { API_KEY } from "../../app.key";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

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
      });
  }

  actorsMovieCredits(id: string): Observable<any> {
    const credits = '/movie_credits?';
    return this.http
      .get(`${this.baseURL}${id}${credits}api_key=${this.apiKey}`)
      .map(response => {
        return response.json().results;
      });
  }
}
