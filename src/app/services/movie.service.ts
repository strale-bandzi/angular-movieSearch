import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()

export class MovieService {
    apikey: string;
    endpoint: string;

    constructor(private _jsonp: Jsonp) {
        this.apikey = '7d95d931bbd34d2753885db116fe5b42';
        this.endpoint = 'https://api.themoviedb.org/3/';
    }

    getPopular() {
        return this._jsonp.get(this.endpoint + `discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=` + this.apikey).pipe(
        map(res => res.json()));
    }

    getInTeathers() {
       return this._jsonp.get(this.endpoint + `discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-09-15&primary_release_date.lte=2017-10-22&api_key=` + this.apikey)
        .pipe(map(res => res.json()));
    }

    searchMovies(searchStr: string) {
        return this._jsonp.get(this.endpoint + `search/movie?callback=JSONP_CALLBACK&query=${searchStr}&sort_by=popularity.desc&api_key=` + this.apikey)
        .pipe(map(res => res.json()));
    }

    getMovie(id: string) {
        return this._jsonp.get(this.endpoint + `movie/${id}?callback=JSONP_CALLBACK&api_key=` + this.apikey).pipe(
            map(res => res.json()));
    }

}


