import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopheaderComponent } from './topheader/topheader.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },

    ])
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    TopheaderComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
