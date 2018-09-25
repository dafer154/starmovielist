import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';

const app_routes: Routes = [
    {path: '', component: HomeComponent}
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