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
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'header', component: HearderComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ResumeComponent,
    HearderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
