import { Test } from './../../model/test';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Resume } from 'src/app/model/resume';
import { ResumeApiService } from 'src/app/services/resume-api.service';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css'],
})
export class HearderComponent implements OnInit {
  resume: Test;

  constructor(private resumeApiService: ResumeApiService) {}
  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.resumeApiService.getResume().subscribe((data) => {
      this.resume = data;
      console.log(data.name);
    });
  }
}
