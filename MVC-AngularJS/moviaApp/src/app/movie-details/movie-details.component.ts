import { Component, OnInit} from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {

  selectedMovie: Movies = new Movies();
  public movieId : number;
  private sub: any;

  constructor(private route: ActivatedRoute ,private movieService: MyserviceService) {
   }

  ngOnInit() {
    this.sub = +this.route.params.subscribe(params => {
          this.movieId = +params['id'];
    });

    this.selectedMovie = this.movieService.getMovieById(this.movieId);
  }

}
