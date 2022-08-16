import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './componetns/home/home.component';
import { AboutComponent } from './componetns/about/about.component';
import { ContactComponent } from './componetns/contact/contact.component';
import { ResumeComponent } from './componetns/resume/resume.component';
import { HearderComponent } from './componetns/hearder/hearder.component';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ResumeComponent,
    HearderComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
