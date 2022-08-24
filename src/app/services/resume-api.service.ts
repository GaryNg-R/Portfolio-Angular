import { Resume } from './../model/resume';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResumeApiService {
  resumeJson = 'assets/resumeData.json';

  constructor(private http: HttpClient) {}

  getResume(): Observable<Resume> {
    return this.http
      .get<{ data: Resume }>(this.resumeJson)
      .pipe(map((value) => value.data));
  }
}
