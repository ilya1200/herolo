import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaService } from './cinema.service';
import { CinemaComponent } from './cinema/cinema.component';

import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from './cinema/edit-modal/edit-modal.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteModalComponent } from './cinema/delete-modal/delete-modal.component';
import { EngPipe } from './cinema/engPipe';
@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    EditModalComponent,
    DeleteModalComponent,
    EngPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    EditModalComponent,
    DeleteModalComponent
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
