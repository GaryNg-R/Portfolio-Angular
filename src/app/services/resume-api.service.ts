import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResumeApiService {
  resumeJson = 'assets/resumeData.json';

  constructor(private http: HttpClient) {}

  getResume(): Observable<Object> {
    return this.http.get(this.resumeJson);
  }
}
