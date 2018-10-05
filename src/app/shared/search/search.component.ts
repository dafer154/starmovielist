import { Component, OnInit } from "@angular/core";
import { SearchService } from "./search.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AppHelperService } from "../../app.helper";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  movies: Object[] = [];
  totalResult: number = 0;
  viewResults: boolean = false;
  query: string = '';

  constructor(private searchService: SearchService,
              private router: Router,
              private route: ActivatedRoute,
              private appHelperService: AppHelperService) {}

  ngOnInit() {}

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
    return this.appHelperService.getImgUrl(src);
  }

  cleanInput() {
    this.movies = [];
    this.totalResult = 0;
    this.viewResults = false;
  }

  redirectToMovie(id: number) {
    this.router.navigate(['/movie', id]);
  }
}
