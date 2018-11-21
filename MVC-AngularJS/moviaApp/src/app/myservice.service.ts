import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Movies } from './models/movies';

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {

  movieList: Movies[];

  constructor(private db: AngularFireDatabase) { 
    this.movieList = [
      { id:1, tittle: 'Back to the Future I', year: 1985, duration: 116, description: 'Marty McFly, a typical American teenager of the Eighties, is accidentally sent back to 1955 in a plutonium-powered DeLorean "time machine" invented by a slightly mad scientist. During his often hysterical, always amazing trip back in time, Marty must make certain his teenage parents-to-be meet and fall in love - so he can get back to the future.' },
      { id:2, tittle: 'Back to the Future II', year: 1989, duration: 108, description: 'Marty McFly has only just gotten back from the past, when he is once again picked up by Dr. Emmett Brown and sent through time to the future. Martys job in the future is to pose as his own son to prevent him from being thrown in prison. Unfortunately, things get worse when the future changes the present.'},
      { id:3, tittle: 'Back to the Future III', year: 1990, duration: 118, description: 'Stranded in 1955, Marty McFly receives written word from his friend, Doctor Emmett Brown, as to where can be found the DeLorean time machine. However, an unfortunate discovery prompts Marty to go to his friends aid. Using the time machine, Marty travels to the old west where his friend has run afoul of a gang of thugs and has fallen in love with a local schoolteacher. Using the technology from the time, Marty and Emmett devise one last chance to send the two of them back to the future.' },

    ];
  }

  selectedMovie: Movies = new Movies();

  getMovies() {
    return this.movieList;
  }

  insertMovie(selectedMovie: Movies) {
    this.movieList.push({
      id: selectedMovie.id = this.movieList.length + 1,
      tittle: selectedMovie.tittle,
      year: selectedMovie.year,
      duration: selectedMovie.duration,
      description: selectedMovie.description
    })
    this.selectedMovie = new Movies();
  }

  addorEdit(){
    if (this.selectedMovie.id === 0){
    this.selectedMovie.id = this.movieList.length + 1;
    this.movieList.push(this.selectedMovie);
    }
    this.selectedMovie = new Movies();
  }

  edit(movie: Movies) {
    this.selectedMovie = Object.assign({movie});
  }
/*
  openForEdit(movie: Movies) {
    this.movieService.selectedMovie = movie;
  }
/*
  updateMovie(selectedMovie: Movies)
  {
    this.movieList.update(selectedMovie.id, {
      id: selectedMovie.id,
      tittle: selectedMovie.tittle,
      year: selectedMovie.year,
      duration: selectedMovie.duration,
      description: selectedMovie.description
    });
  }

  deleteMovie(id: number)
  {
    this.movieList.remove(id);
  }
*/
  

  delete(){
    if( confirm("Are you sure you want to delete it?")){
      this.movieList = this.movieList.filter(x => x != this.selectedMovie);
      this.selectedMovie = new Movies();
    }
  }

  getMovieById(id: number){
    for (let movie of this.movieList){
      if (movie.id == id){
        this.selectedMovie = movie;
        return this.selectedMovie
      }
      else {

      }
    }
    
  }
  
}
