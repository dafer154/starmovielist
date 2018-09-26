import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingTopicMovies = [];

  constructor(private homeService: HomeService){}
  
  ngOnInit() {
    this.getTrendingWeek();
    this.getImgUrl();
  }

  getTrendingWeek(){
    this.homeService.trendingTopicWeek().subscribe(response => {
      this.trendingTopicMovies = response;
      console.log(this.trendingTopicMovies);
  }
  }

  getImgUrl(src: string): string {
    const url = `https://image.tmdb.org/t/p/w300${src}`;
		return url;
  };
