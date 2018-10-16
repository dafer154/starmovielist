import { Injectable } from '@angular/core';
import { API_KEY } from "../../app.key";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  apiKey: string = API_KEY;
  /*End point more popular series and movies in the week */

  //baseURL = 'https://api.themoviedb.org/3/trending/all/week?';

  baseURL = 'https://api.themoviedb.org/3/movie/';


  constructor(private http: Http) {}


  nowPlayingMovies(): Observable<any> {
    const latest = 'now_playing?';
    return this.http
      .get(`${this.baseURL}${latest}api_key=${this.apiKey}`)
      .map(response => {
        return response.json().results;
      }).catch(this.errorHandler);
  }

  popularMovies(): Observable<any> {
    const popular = 'popular?';
    return this.http
      .get(`${this.baseURL}${popular}api_key=${this.apiKey}`)
      .map(response => {
        return response.json().results;
      }).catch(this.errorHandler);
  }

  topRatedMovies(): Observable<any> {
    const top_rated = 'top_rated?';
    return this.http
      .get(`${this.baseURL}${top_rated}api_key=${this.apiKey}`)
      .map(response => {
        return response.json().results;
      }).catch(this.errorHandler);
  }

  upComingMovies(): Observable<any> {
    const upcoming = 'upcoming?';
    return this.http
      .get(`${this.baseURL}${upcoming}api_key=${this.apiKey}`)
      .map(response => {
        return response.json().results;
      }).catch(this.errorHandler);
  }

  private errorHandler(error: Response) {
    console.error('An error occurred', error);
    return Observable.throw(error.statusText);
  }

}
