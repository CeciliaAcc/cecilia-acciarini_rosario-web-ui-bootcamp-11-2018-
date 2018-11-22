import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Movies } from '../models/movies';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  selectedMovie: Movies = new Movies();
  movie: Movies = new Movies();
  public movieId : number;
  private sub: any;

  constructor(private route: Router ,private movieService: MyserviceService) { }

  ngOnInit() {

  }

  onSubmit(movieForm: NgForm)
  {
    if(movieForm.value.id == null){

      this.selectedMovie.id = this.movieService.movieList.length + 1;
      this.movieService.movieList.push(this.selectedMovie);
      this.selectedMovie = new Movies(); 
    }
  }

  resetForm(movieForm?: NgForm)
  {
    if(movieForm != null)
      movieForm.reset();
      this.movieService.selectedMovie = new Movies();
  }

 

}

