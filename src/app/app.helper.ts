import { Injectable } from "@angular/core";

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
}
