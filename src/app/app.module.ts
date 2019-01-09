import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaService } from './cinema.service';
import { CinemaComponent } from './cinema/cinema.component';

import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from './cinema/edit-modal/edit-modal.component';
import {  FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  entryComponents: [
    EditModalComponent
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
