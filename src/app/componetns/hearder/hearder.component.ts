import { Test } from './../../model/test';
import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/model/resume';
import { ResumeApiService } from 'src/app/services/resume-api.service';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css'],
})
export class HearderComponent implements OnInit {
  resume: Resume;

  constructor(private resumeApiService: ResumeApiService) {}
  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.resumeApiService.getResume().subscribe((data) => {
      this.resume = data;
      console.log(this.resume.main.address);
      console.log(this.resume.main.address['city']);
    });
  }
}
