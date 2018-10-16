import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import {MoviesComponent} from './pages/movies/movies.component';
import {MovieDetailComponent} from './pages/movie-detail/movie-detail.component';
import {PeopleDetailComponent} from './pages/people-detail/people-detail.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import { ActorsComponent } from './pages/actors/actors.component';

const app_routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'movie/:id', component: MovieDetailComponent},
    {path: 'actor/:id', component: PeopleDetailComponent},
    {path: 'about', component: AboutComponent},
    {path: '404', component: NotFoundComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'actors', component: ActorsComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }