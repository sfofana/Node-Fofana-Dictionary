import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, ChartsModule, WavesModule, ButtonsModule, CardsModule, ModalModule, TooltipModule, PopoverModule } from 'angular-bootstrap-md'

import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { FormsModule } from '@angular/forms';
import { DictionaryService } from './service/dictionary.service';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    CardsModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
