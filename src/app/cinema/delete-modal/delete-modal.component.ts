import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { infMovie } from 'src/app/infMovie';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  private movie: infMovie;
  
  constructor(private modalInstance: NgbActiveModal) { }

  ngOnInit() {
  }
  
  deleteMovie(){
    this.modalInstance.close(true);
  }

  closeModal() {
    this.modalInstance.dismiss();
  }


}
