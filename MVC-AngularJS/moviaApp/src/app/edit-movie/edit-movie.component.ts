import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

    selectedMovie: Movies = new Movies();
    movie: Movies = new Movies();
    public movieId : number;
    private sub: any;

    constructor(private route: ActivatedRoute ,private movieService: MyserviceService) { }

    ngOnInit() {
      this.sub = +this.route.params.subscribe(params => {
        this.movieId = +params['id'];
      });

      this.selectedMovie = this.movieService.getMovieById(this.movieId);
    }

    onSubmit(movieForm: NgForm)
    {
      if(movieForm.value.id == null){

        this.selectedMovie.id = this.movieService.movieList.length + 1;
        this.movieService.movieList.push(this.selectedMovie);
        this.selectedMovie = new Movies(); }

      else {/*
        this.movieService.updateMovie(movieForm.value);
      
        this.resetForm(movieForm);
      
      /* openEdit(movie: Movies) {
          this.editShow = true;
          this.editedMovie = movie;
        }
        */
      }
    }

    resetForm(movieForm?: NgForm)
    {
      if(movieForm != null)
        movieForm.reset();
        this.movieService.selectedMovie = new Movies();
    }

    delete(movieForm: NgForm)
    {
      if(movieForm != null)
        this.movieService.delete();
    }
  

}

