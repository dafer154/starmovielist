import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  movies: Object[] = [];
  totalResult: number = 0;
  viewResults: boolean = false;
  query: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit() {
  }

  /**
   * Search movie by title
   * @param $event
   */

searchMovies($event) {
  const query = $event.target.value;
    this.searchService.searchMovie(query).subscribe(response => {
    this.movies = response;
    this.totalResult = response.length;
    if (this.totalResult !== 0) {
      this.viewResults = true;
    }
    console.log(this.totalResult);
    console.log(this.movies);
  });
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

cleanInput() {
  this.movies = [];
  this.totalResult = 0;
  this.viewResults = false;
}

}
