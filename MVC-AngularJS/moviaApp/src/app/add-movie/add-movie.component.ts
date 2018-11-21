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

  selectedMovie: Movies = new Movies();
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
    if(movieForm.value.id == null)
      this.movieService.insertMovie(movieForm.value);
    else {
     /* this.movieService.updateMovie(movieForm.value);
    
      this.resetForm(movieForm);*/
    }
  }

 

  

  resetForm(movieForm?: NgForm)
  {
    if(movieForm != null)
      movieForm.reset();
      this.movieService.selectedMovie = new Movies();
  }
 

}

