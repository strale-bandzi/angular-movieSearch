import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.component.html'
})
export class MoviesComponent implements OnInit {

  popularList: Array<Object>;
  theatro: Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  constructor(private _movieService: MovieService) {

  }


  ngOnInit() {

    this._movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
  });

  this._movieService.getInTeathers().subscribe( res => {
    this.theatro = res.results;
  });

  }

  searchMovies() {
    this._movieService.searchMovies(this.searchStr).subscribe( res => {
      this.searchRes = res.results;
    });
  }

}
