import { Component, OnInit } from '@angular/core';
import { ActorsService } from './actors.service';
import { SearchService } from '../../shared/search/search.service';
import { AppHelperService } from '../../app.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  constructor(
    private actorsService: ActorsService,
    private searchService: SearchService,
    private appHelperService: AppHelperService,
    private router: Router
  ) {}

  people = [];
  totalResult = 0;
  viewResults = false;
  current = 'Popular';

  ngOnInit() {
    this.getPopularPeople();
  }

  getPopularPeople() {
    this.actorsService.popularPeople().subscribe((data: any) => {
      this.people = data.results;
      this.current = 'Popular';
    });
  }

  searchActors($event) {
    const query = $event.target.value;
    this.searchService.searchActor(query).subscribe((data: any) => {
      this.people = data.results;
      this.totalResult = data.results.length;
      this.current = 'Search';
      if (this.totalResult !== 0) {
        this.viewResults = true;
      }
    });
  }

  moviesParticipated(movies: any) {
    let listMovies = '';
    for (let i = 0; i < movies.length; i++) {
      listMovies += movies[i].original_title + ', ';
    }
    return listMovies;
  }

  getImgUrl(src: string): string {
    return this.appHelperService.getImgUrl(src);
  }

  redirectToMovie(id: number) {
    this.router.navigate(['/movie', id]);
  }

  redirectToActor(id: number) {
    this.router.navigate(['/actor', id]);
  }
}
