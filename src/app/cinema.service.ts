import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infMovie } from './infMovie';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http:HttpClient) { }

  getMovies() : infMovie[]{
    const from:number=0;//0 - test

    if(from===0){//Hard code
      return [
        {
          "Id": 1,
          "Title":"Dog Day Afternoon",
          "Year":"1975",
          "Runtime":"125 min",
          "Genre":"Biography, Crime, Drama",
          "Director":"Sindey Lumet"
        },
        {
          "Id": 2,
          "Title": "Guardians of the Galaxy Vol. 2",
          "Year":"2017",
          "Runtime":"136 min",
          "Genre":"Action, Adventure, Comedy, Sci-Fi",
          "Director": "James Gunn"
        },
  
        {
          "Id": 3,
          "Title": "Avengers: Endgame",
          "Year":"2019",
          "Runtime":"120 min",
          "Genre":"Action, Adventure, Fantasy ",
          "Director": "Anthony Russo, Joe Russo"
        }
        
      ];
    }
    // else{//From server
    //   const url:string="http://www.omdbapi.com/";
    //   return this.http.get(url);

    // }//Else

  }
}
