import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MoviesService } from './movies.service';
import { Router } from '@angular/router';
import { AppHelperService } from '../../app.helper';
import { Movie } from '../../classes/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  current = 'Now playing';

  constructor(
    private router: Router,
    private moviesService: MoviesService,
    private appHelperService: AppHelperService
  ) {}

  ngOnInit() {
    this.getNowPlayingMovies();
  }

  getNowPlayingMovies() {
    this.moviesService.nowPlayingMovies().subscribe(response => {
      this.current = "Now playing";
      this.movies = response;
    });
  }

  getPopularMovies() {
    this.moviesService.popularMovies().subscribe(response => {
      this.movies = response;
      this.current = 'Popular';
    });
  }

  getTopRatedMovies() {
    this.moviesService.topRatedMovies().subscribe(response => {
      this.movies = response;
      this.current = 'Top rated';
    });
  }

  getUpComingMovies() {
    this.moviesService.upComingMovies().subscribe(response => {
      this.movies = response;
      this.current = 'Up coming';
    });
  }


  redirectToMovie(id: number) {
    this.router.navigate(['/movie', id]);
  }

  getImgUrl(src: string): string {
    return this.appHelperService.getImgUrl(src);
  }

  genresMovie(genre: any) {
    return this.appHelperService.genresMovie(genre);
  }
}
