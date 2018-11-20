import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  
  movieList: Movies[];
  
  constructor(private movieService: MyserviceService) {
  
   }

  ngOnInit() {
    this.movieList = this.movieService.getMovies();
    
  }
/*
  edit(movie: Movies) {
    this.movieService.selectedMovie = Object.assign({movie});
  }
*/
  openForEdit(movie: Movies) {
    this.movieService.selectedMovie = movie;
  }
  

 

    
}

