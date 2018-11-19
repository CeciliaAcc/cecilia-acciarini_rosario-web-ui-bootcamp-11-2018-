import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Movies } from '../models/movies';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private route: ActivatedRoute ,private movieService: MyserviceService) { }

  ngOnInit() {
    this.movieService.getMovies();
    this.resetForm();
  }

  onSubmit(movieForm: NgForm)
  {
    if(movieForm.value.id == null)
      this.movieService.insertMovie(movieForm.value);
    else
    this.movieService.updateMovie(movieForm.value);
    
    this.resetForm(movieForm);
  }

  resetForm(movieForm?: NgForm)
  {
    if(movieForm != null)
      movieForm.reset();
      this.movieService.selectedMovie = new Movies();
  }


}

