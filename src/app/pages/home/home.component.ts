import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingTopicMovies = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getTrendingWeek();
  }

  getTrendingWeek() {
    this.homeService.trendingTopicWeek().subscribe(response => {
      this.trendingTopicMovies = response;
      console.log(this.trendingTopicMovies);
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

  getImagePath(path: string): string {
    if (typeof path === 'undefined' || path === null) {
      return 'assets/img/no-img.jpg';
    } else {
      return 'https://image.tmdb.org/t/p/w500' + path;
    }
  }
}
