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
        movieForm.value.id = this.movieService.selectedMovie.id;
        this.movieService.updateMovie(movieForm.value);
    }

    delete(movieForm: NgForm)
    {
      this.movieService.delete(movieForm.value);
    }
  
}

