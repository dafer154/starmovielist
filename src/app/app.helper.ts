import { Injectable } from '@angular/core';
import {GenresMovies} from './classes/genres';

@Injectable()
export class AppHelperService {
  /**
   * Url to get image from tmdb api
   **/
  baseUrl: string = 'http://image.tmdb.org/t/p/w300/';

  urlYoutube: string = 'https://www.youtube.com/embed/';

  constructor() {}


  getMovieVideoUrl(value: string): string {
    return `${this.urlYoutube}/${value}`;
  }

  getImgUrl(src: string): string {
    if (src != null) {
      const url = `https://image.tmdb.org/t/p/w300${src}`;
      return url;
    } else {
      const url = `./assets/images/question.jpg`;
      return url;
    }
  }

  genresMovie(genre: any) {
    let listGeneres  = '';

    for (let id of genre) {
      listGeneres += GenresMovies[id] + ' | ';
    }
    return listGeneres;
  }
}
