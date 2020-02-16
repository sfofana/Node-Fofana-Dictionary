import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, ChartsModule, WavesModule, ButtonsModule, CardsModule, ModalModule, TooltipModule, PopoverModule } from 'angular-bootstrap-md'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    WavesModule,
    ButtonsModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
