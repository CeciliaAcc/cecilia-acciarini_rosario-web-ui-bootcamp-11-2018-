 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  { path: "movie/id/:id", component: MovieDetailsComponent },
  { path: "movieForm/:id", component: AddMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
