import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { AppHelperService } from '../../app.helper';
import { Movie } from '../../classes/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingTopicMovies: Movie[] = [];
  popularPeople = [];

  constructor(
    private router: Router,
    private homeService: HomeService,
    private appHelperService: AppHelperService
  ) {}

  ngOnInit() {
    this.getTrendingWeek();
    this.getPopularPeople();
  }

  getTrendingWeek() {
    this.homeService.trendingTopicWeek().subscribe((data: any) => {
      this.trendingTopicMovies = data.results;
    });
  }

  getPopularPeople() {
    this.homeService.popularPeople().subscribe((data: any) => {
      this.popularPeople = data.results;
    });
  }

  moviesParticipated(movies: any) {
    let listMovies = '';
    for (let i = 0; i < movies.length; i++) {
      listMovies += movies[i].original_title + ', ';
    }
    return listMovies;
  }

  redirectToMovie(id: number) {
    this.router.navigate(['/movie', id]);
  }

  redirectToActor(id: number) {
    this.router.navigate(['/actor', id]);
  }

  getImgUrl(src: string): string {
    return this.appHelperService.getImgUrl(src);
  }

  genresMovie(genre: any) {
    return this.appHelperService.genresMovie(genre);
  }
}
