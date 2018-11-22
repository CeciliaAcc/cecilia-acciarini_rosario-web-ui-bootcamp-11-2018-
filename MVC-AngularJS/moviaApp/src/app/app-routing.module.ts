import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
      { path: "movie/id/:id", component: MovieDetailsComponent},
      { path: "movieForm/Add/", component: AddMovieComponent },
      { path: "movieForm/Edit/:id", component: EditMovieComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
