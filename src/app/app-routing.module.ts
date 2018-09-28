import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const app_routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent}
    //{path: '404', component: NotFoundComponent},
    //{path: '**', redirectTo: '404'}
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