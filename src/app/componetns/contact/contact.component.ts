import { Component, Input, OnInit } from '@angular/core';
import { Resume } from 'src/app/model/resume';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() resume: Resume;
  constructor() {}

  ngOnInit(): void {}
}
