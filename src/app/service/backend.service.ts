import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getRequest(): Observable<any> {
    return this.http.get<any>('http://localhost:3001/test');
  }
}
