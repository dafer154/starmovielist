import { Component, OnInit } from "@angular/core";
import { ActorsService } from "./actors.service";
import { AppHelperService } from "../../app.helper";

@Component({
  selector: "app-actors",
  templateUrl: "./actors.component.html",
  styleUrls: ["./actors.component.css"]
})
export class ActorsComponent implements OnInit {
  constructor(
    private actorsService: ActorsService,
    private appHelperService: AppHelperService
  ) {}

  popularPeople = [];
  movieCredits = [];

  ngOnInit() {
    this.getPopularPeople();
  }

  getPopularPeople() {
    this.actorsService.popularPeople().subscribe(response => {
      this.popularPeople = response;
      console.log(this.popularPeople);
    });
  }

  moviesParticipated(movies: []) {
    let listMovies  = '';
    for ( let i = 0; i < movies.length; i++) {
      listMovies += movies[i].original_title + ', ';
    }
    return listMovies;
  }

  actorsMovieCredits(id) {}

  getImgUrl(src: string): string {
    return this.appHelperService.getImgUrl(src);
  }
}
