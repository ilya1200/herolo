import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { infMovie } from '../infMovie';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  public movies: infMovie[] = [];

  constructor(private _CinemaService:CinemaService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this._CinemaService.getMovies(data => this.movies=data);
  }

  OpenEditModal(movie, isEditMode) {
    var modal = this.modalService.open(EditModalComponent);
    modal.componentInstance.movie = { ... movie};
    modal.componentInstance.movies = this.movies.filter(m => m != movie);
    modal.result.then((result) => {
      if (isEditMode == true) {
        for (let prop in result) {
          movie[prop] = result[prop];
        }
      } else {
        this.movies.push(result);
      }
      
    }, (close)=>{});    
  }

  OpenDeleteModal(movie){
    var modal = this.modalService.open(DeleteModalComponent);
    modal.componentInstance.movie =  movie;
    modal.result.then((deletePermission) => {
      if(deletePermission){
        this.movies.splice(this.movies.indexOf(movie), 1);
      }

    }, (close)=>{});
  }
}
