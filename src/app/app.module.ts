import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleCardComponent } from './components/style-card/style-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StyleEditFormComponent } from './components/style-edit-form/style-edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StyleCardComponent,
    StyleEditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
