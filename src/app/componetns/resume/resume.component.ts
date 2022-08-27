import { Component, Input, OnInit } from '@angular/core';
import { Resume } from 'src/app/model/resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  @Input() resume: Resume;
  constructor() {}

  ngOnInit(): void {}
}
