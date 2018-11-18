import { Component, OnInit, HostBinding } from '@angular/core';
import { Movies } from '../models/movies';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor() { }

  movieList: Movies[] = [];

  selectedMovie: Movies = new Movies();

  openForEdit(movie: Movies) {
    this.selectedMovie = movie;
  }

  addorEdit(){
    if (this.selectedMovie.id === 0){
    this.selectedMovie.id = this.movieList.length + 1;
    this.movieList.push(this.selectedMovie);
    }
    this.selectedMovie = new Movies();
  }

  delete(){
    if( confirm("Are you sure you want to delete it?")){
      this.movieList = this.movieList.filter(x => x != this.selectedMovie);
      this.selectedMovie = new Movies();
    }
  }

  ngOnInit() {
  }

}

