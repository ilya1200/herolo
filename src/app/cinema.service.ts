import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infMovie } from './infMovie';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CinemaService { 

  constructor(private http:HttpClient) { }

  getMovies(callback){
    const idArr = ['tt0429434', 'tt2287041', 'tt2693892','tt2568868','tt2537956','tt2361849']; 
    var allMovies: infMovie[] = [];
    idArr.forEach(movieId => {
      this.getMovie(movieId).subscribe(movie => {
        movie.Id = movieId;
        allMovies.push(movie);
        if (allMovies.length === idArr.length) {
          callback(allMovies);
        }
      });
    });
  }

  getMovie(id: string):Observable<infMovie> {
    const url:string="https://www.omdbapi.com/?apikey=f794628b&i=" + id;
    return this.http.get<infMovie>(url);
  }
}
