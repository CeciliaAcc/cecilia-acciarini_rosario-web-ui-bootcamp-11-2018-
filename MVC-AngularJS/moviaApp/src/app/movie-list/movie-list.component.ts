import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  
  movieList: Movies[];
  selectedMovie: Movies;
  
  constructor(private movieService: MyserviceService, private route: Router) {
  
   }

  ngOnInit() {
    this.movieList = this.movieService.getMovies();

    this.route.navigate['movieForm/Add/']
    
    
  }


  
  

 

    
}

