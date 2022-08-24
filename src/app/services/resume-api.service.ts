import { Test } from './../model/test';
import { Resume } from './../model/resume';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResumeApiService {
  resumeJson = 'assets/test.json';

  constructor(private http: HttpClient) {}

  getResume(): Observable<Test> {
    return this.http.get<Test>(this.resumeJson);
  }
}
