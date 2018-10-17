import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

/* File routing */
import { AppRoutingModule } from './app-routing.module';

/*Services */
import { HomeService } from './pages/home/home.service';
import { SearchService } from './shared/search/search.service';
import { MoviesService } from './pages/movies/movies.service';
import { ActorsService } from './pages/actors/actors.service';

/*Helpers */
import { AppHelperService } from './app.helper';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './shared/search/search.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { AboutComponent } from './pages/about/about.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { PeopleDetailComponent } from './pages/people-detail/people-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

/*Pipes */
import {SafePipe} from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    ActorsComponent,
    MoviesComponent,
    AboutComponent,
    MovieDetailComponent,
    PeopleDetailComponent,
    NotFoundComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [HomeService, SearchService, AppHelperService, MoviesService, ActorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
