import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { infMovie } from '../../infMovie';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  private movie: infMovie;
  private movies: infMovie[];
  movieForm: any;
  isTitleExists: boolean;
  
  constructor(private modalInstance: NgbActiveModal, private builder: FormBuilder) { 

  }

  ngOnInit() {
   
  }

  saveMovie() {
    var frm = document.forms["myForm"];
    if (this.validateTitle() == false && frm.checkValidity()) {
      this.modalInstance.close(this.movie);
    }
  }

  closeModal() {
    this.modalInstance.dismiss();
  }

  validateTitle(){
    if (this.movies.filter(m => m.Title == this.movie.Title).length > 0) {
      this.isTitleExists = true;
    } else {
      this.isTitleExists = false;
    }
    return this.isTitleExists;
  }

}
