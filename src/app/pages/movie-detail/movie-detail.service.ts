import { Injectable } from '@angular/core';
import { API_KEY } from '../../app.key';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {
  /*Api key david*/
  apiKey: string = API_KEY;

  /*Endpoint for detail Movies */

  baseURL = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient) {}

  detailMovie(idMovie: string): Observable<any> {
    return this.http
      .get(`${this.baseURL}/${idMovie}?api_key=${this.apiKey}`)
      .catch(this.errorHandler);
  }

  getMovieVideos(idMovie: string): Observable<any> {
    const videoUrl = '/videos';
    return this.http
      .get(`${this.baseURL}/${idMovie}${videoUrl}?api_key=${this.apiKey}`)
      .catch(this.errorHandler);
  }

  getRecommendationsMovie(idMovie: string): Observable<any> {
    const recomend = '/recommendations';
    return this.http
      .get(`${this.baseURL}/${idMovie}${recomend}?api_key=${this.apiKey}`)
      .catch(this.errorHandler);
  }

  getCreditsMovie(idMovie: string): Observable<any> {
    const credits = '/credits';
    return this.http
      .get(`${this.baseURL}/${idMovie}${credits}?api_key=${this.apiKey}`)
      .catch(this.errorHandler);
  }

  getImages(idMovie: string): Observable<any> {
    const images = '/images';
    return this.http
      .get(`${this.baseURL}/${idMovie}${images}?api_key=${this.apiKey}`)
      .catch(this.errorHandler);
  }

  private errorHandler(error: Response) {
    console.error('An error occurred', error);
    return Observable.throw(error.statusText);
  }
}
