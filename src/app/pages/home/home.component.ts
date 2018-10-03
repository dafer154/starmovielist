import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";
import { Router } from "@angular/router";
import { AppHelperService } from "../../app.helper";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  trendingTopicMovies = [];

  constructor(
    private router: Router,
    private homeService: HomeService,
    private appHelperService: AppHelperService
  ) {}

  ngOnInit() {
    this.getTrendingWeek();
  }

  getTrendingWeek() {
    this.homeService.trendingTopicWeek().subscribe(response => {
      this.trendingTopicMovies = response;
      console.log(this.trendingTopicMovies);
    });
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
}
