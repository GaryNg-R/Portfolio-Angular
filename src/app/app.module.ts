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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: 'home', component: HearderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
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
    FontAwesomeModule,
    RouterModule.forRoot(routes, {
      // Tell the router to use the hash instead of HTML5 pushstate.
      useHash: true,
      // In order to get anchor / fragment scrolling to work at all, we need to
      // enable it on the router.
      anchorScrolling: 'enabled',
      // Once the above is enabled, the fragment link will only work on the
      // first click. This is because, by default, the Router ignores requests
      // to navigate to the SAME URL that is currently rendered. Unfortunately,
      // the fragment scrolling is powered by Navigation Events. As such, we
      // have to tell the Router to re-trigger the Navigation Events even if we
      // are navigating to the same URL.
      onSameUrlNavigation: 'reload',
      // Let's enable tracing so that we can see the aforementioned Navigation
      // Events when the fragment is clicked.
      enableTracing: true,
      scrollPositionRestoration: 'enabled',
    }),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
