import { Component, OnInit } from '@angular/core';
import { ResumeApiService } from 'src/app/services/resume-api.service';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css'],
})
export class HearderComponent implements OnInit {
  constructor(private resumeApiService: ResumeApiService) {
    this.resumeApiService.getResume().subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
