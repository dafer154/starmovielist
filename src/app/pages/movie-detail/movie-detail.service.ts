import { Injectable } from '@angular/core';
import { API_KEY } from '../../app.key';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {
  /*Api key david*/
  apiKey: string = API_KEY;

  /*Endpoint for detail Movies */

  baseURL = 'https://api.themoviedb.org/3/movie';


  constructor(private http: Http) {}

  detailMovie(idMovie: string): Observable<any> {
    return this.http
      .get(`${this.baseURL}/${idMovie}?api_key=${this.apiKey}`)
      .map(response => {
        return response.json();
      });
  }

  getMovieVideos(idMovie: string): Observable<any> {
    const videoUrl = '/videos';
    return this.http
      .get(`${this.baseURL}/${idMovie}${videoUrl}?api_key=${this.apiKey}`)
      .map(response => {
        return response.json();
      });
  }

  getRecommendationsMovie(idMovie: string): Observable<any> {
    const recomend = '/recommendations';
    return this.http
      .get(`${this.baseURL}/${idMovie}${recomend}?api_key=${this.apiKey}`)
      .map(response => {
        return response.json();
      });
  }

  getCreditsMovie(idMovie: string): Observable<any> {
    const credits = '/credits';
    return this.http
      .get(`${this.baseURL}/${idMovie}${credits}?api_key=${this.apiKey}`)
      .map(response => {
        return response.json();
      });
  }

  getImages(idMovie: string): Observable<any> {
    const images = '/images';
    return this.http
      .get(`${this.baseURL}/${idMovie}${images}?api_key=${this.apiKey}`)
      .map(response => {
        return response.json();
      });
  }
}
