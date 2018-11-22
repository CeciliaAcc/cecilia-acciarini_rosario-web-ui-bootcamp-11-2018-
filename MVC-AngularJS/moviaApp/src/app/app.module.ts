import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    AddMovieComponent,
    MovieDetailsComponent,
    EditMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MyserviceService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
