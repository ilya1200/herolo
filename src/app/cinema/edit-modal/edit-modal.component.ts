import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { infMovie } from '../../infMovie';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  private movie: infMovie;
  movieForm: FormGroup;
  
  constructor(private modalInstance: NgbActiveModal) { 
     
  }

  ngOnInit() {
    this.movieForm = new FormGroup({
      title: new FormControl(this.movie.Title, [
        Validators.required,
        Validators.minLength(4)
      ]),

    });
  }

  saveMovie() {
    this.modalInstance.close(this.movie);
  }

  closeModal() {
    this.modalInstance.dismiss();
  }



}
