import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieDetailService } from './movie-detail.service';
import { AppHelperService } from '../../app.helper';
import { Movie } from '../../classes/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  resultDetailMovie: any = {};
  movie: Movie[] = [];
  recommendationsMovie: Movie[] = [];
  movieCredits = [];
  imagesMovie = [];
  constructor(
    private movieDetailService: MovieDetailService,
    private router: Router,
    private route: ActivatedRoute,
    private appHelperService: AppHelperService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      const id = param['id'];
      this.movieDetailService.detailMovie(id).subscribe(
        (data: {}) => {
          this.resultDetailMovie = data;
        },
        err => {
          // If movie detail return error, raise 404
          this.router.navigate(['/404']);
        }
      );
      this.movieDetailService.getMovieVideos(id).subscribe(
        (data: any) => {
          this.movie = data.results[0];
        },
        err => {
          // If movie videos return error, raise 404
          this.router.navigate(['/404']);
        }
      );
      this.movieDetailService.getRecommendationsMovie(id).subscribe(
        (data: any) => {
          this.recommendationsMovie = data.results;

        },
        err => {
          // If movie videos return error, raise 404
          this.router.navigate(['/404']);
        }
      );
      this.movieDetailService.getCreditsMovie(id).subscribe(
        (data: any) => {
          this.movieCredits = data.cast;
        },
        err => {
          // If movie videos return error, raise 404
          this.router.navigate(['/404']);
        }
      );
      this.movieDetailService.getImages(id).subscribe((data: any) => {
        this.imagesMovie = data.backdrops;
      });
    });
  }

  getImgUrl(src: string): string {
    return this.appHelperService.getImgUrl(src);
  }

  getMovieVideoUrl(value: string): string {
    return this.appHelperService.getMovieVideoUrl(value);
  }

  redirectToMovie(id: number) {
    this.router.navigate(['/movie', id]);
  }

  redirectToActor(id: number) {
    this.router.navigate(['/actor', id]);
  }

  genresMovie(genre: any) {
    return this.appHelperService.genresMovie(genre);
  }
}
