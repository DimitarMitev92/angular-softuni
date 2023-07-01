import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postData(data: {}): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  checkUpdate(i: number, data: {}): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${i}`, data);
  }

  deleteData(i: number): Observable<any> {
    console.log('clicked');
    return this.http.delete<any>(`${this.apiUrl}/${i}`);
  }
}
