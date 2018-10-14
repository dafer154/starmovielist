import { Injectable } from '@angular/core';
import { API_KEY } from '../../app.key';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PeopleDetailService {

  apiKey: string = API_KEY;

  /*Endpoint for detail Movies */

  baseURL = 'https://api.themoviedb.org/3/person';

  baserUrlCredit = 'https://api.themoviedb.org/3/credit';


  constructor(private http: Http) {}

  getDetailPerson(idActor: string): Observable<any> {
    return this.http
      .get(`${this.baseURL}/${idActor}?api_key=${this.apiKey}`)
      .map(response => {
        return response.json();
      });
  }


  getMovieCreditsPerson(idActor: string): Observable<any> {
    const credits = '/movie_credits';
    return this.http
      .get(`${this.baseURL}/${idActor}${credits}?api_key=${this.apiKey}`)
      .map(response => {
        return response.json();
      });
  }

  getImagesPeople(idActor: string): Observable<any> {
    const images = '/images';
    return this.http
      .get(`${this.baseURL}/${idActor}${images}?api_key=${this.apiKey}`)
      .map(response => {
        return response.json();
      });
  }

  getCreditActorMovie(idCredit: string): Observable<any> {
    return this.http
      .get(`${this.baserUrlCredit}/${idCredit}?api_key=${this.apiKey}`)
      .map(response => {
        return response.json();
      });
  }
}
