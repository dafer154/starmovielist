import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PeopleDetailService } from "./people-detail.service";
import { AppHelperService } from "../../app.helper";
import { Movie } from "../../classes/movie";
import { Observable } from 'rxjs';

@Component({
  selector: "app-people-detail",
  templateUrl: "./people-detail.component.html",
  styleUrls: ["./people-detail.component.css"]
})
export class PeopleDetailComponent implements OnInit {
  constructor(
    private peopleDetailService: PeopleDetailService,
    private router: Router,
    private route: ActivatedRoute,
    private appHelperService: AppHelperService
  ) {}

  resultDetailPerson = {};
  imagesPerson = [];
  movieCreditsPerson = [];


  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      const id = param["id"];
      this.peopleDetailService.getDetailPerson(id).subscribe(
        response => {
          this.resultDetailPerson = response;
        },
        err => {
          // If movie detail return error, raise 404
          this.router.navigate(["/404"]);
        }
      );
      this.peopleDetailService.getImagesPeople(id).subscribe(
        response => {
          this.imagesPerson = response.profiles;
        },
        err => {
          // If movie videos return error, raise 404
          this.router.navigate(["/404"]);
        }
      );
      this.peopleDetailService.getMovieCreditsPerson(id).subscribe(
        response => {
          this.movieCreditsPerson = response.cast;
        },
        err => {
          // If movie videos return error, raise 404
          this.router.navigate(["/404"]);
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

  redirectToActor(id: number) {
    this.router.navigate(['/actor', id]);
  }

  genresMovie(genre: any) {
    return this.appHelperService.genresMovie(genre);
  }
}
