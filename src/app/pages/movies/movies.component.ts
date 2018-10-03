import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  resultDetailMovie = [];


  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

}
