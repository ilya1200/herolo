import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { infMovie } from '../infMovie';

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
    this.movies = this._CinemaService.getMovies();
  }

  OpenEditModal(movie) {
    var modal = this.modalService.open(EditModalComponent);
    modal.componentInstance.movie = { ... movie};
    modal.componentInstance.modalInstance = modal;
    modal.result.then((result) => {
      for (let prop in result) {
        movie[prop] = result[prop];
      }
    });
  }
}
