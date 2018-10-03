import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute } from "@angular/router";
import { MovieDetailService } from "./movie-detail.service";
import { AppHelperService } from "../../app.helper";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  resultDetailMovie: any = {};
  movie = [];
  recommendationsMovie = [];
  movieCredits = [];
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
        response => {
          this.resultDetailMovie = response;
          console.log(this.resultDetailMovie);
        },
        err => {
          // If movie detail return error, raise 404
          this.router.navigate(['/404']);
        }
      );
      this.movieDetailService.getMovieVideos(id).subscribe(
        response => {
          this.movie = response.results[0];
          console.log(this.movie);
        },
        err => {
          // If movie videos return error, raise 404
          this.router.navigate(['/404']);
        }
      );
      this.movieDetailService.getRecommendationsMovie(id).subscribe(
        response => {
          this.recommendationsMovie = response.results;
          console.log(this.recommendationsMovie);
        },
        err => {
          // If movie videos return error, raise 404
          this.router.navigate(['/404']);
        }
      );
      this.movieDetailService.getCreditsMovie(id).subscribe(
        response => {
          this.movieCredits = response.cast;
          console.log(this.movieCredits);
        },
        err => {
          // If movie videos return error, raise 404
          this.router.navigate(['/404']);
        }
      );
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

  /*
  obtainPrincipalCast(actors: [] ) {
    const arrayPrincipal = [];
    for (let i = 0; i < 10; i++) {
      arrayPrincipal.push(actors[i]);
    }
    return arrayPrincipal;
  }
*/
}
