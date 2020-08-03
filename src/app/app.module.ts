//Troy Johnson
//991-530-754


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './modules/material-ui/material-ui.module';
import { JohnsonComponent } from './johnson/johnson.component';
import { HeaderComponent } from './headfoot/header/header.component';
import { FooterComponent } from './headfoot/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    JohnsonComponent,
    HeaderComponent,
    FooterComponent
  ], 

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
