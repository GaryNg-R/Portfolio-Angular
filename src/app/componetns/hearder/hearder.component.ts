import { Test } from './../../model/test';
import { Component, HostListener, OnInit } from '@angular/core';
import { Resume } from 'src/app/model/resume';
import { ResumeApiService } from 'src/app/services/resume-api.service';
import { RouterModule } from '@angular/router';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css'],
})
export class HearderComponent implements OnInit {
  resume: Resume;
  faCircle = faCircleArrowDown;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(private resumeApiService: ResumeApiService) {}
  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.resumeApiService.getResume().subscribe((data) => {
      this.resume = data;
      // console.log(this.resume.main.address);
      // console.log(this.resume.main.address['city']);
      // console.log(this.resume.resume.work[0].descriptions);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('#nav-wrap') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('opaque');
    } else {
      element.classList.remove('opaque');
    }
  }
}
