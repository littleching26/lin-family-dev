import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  constructor(private http: HttpClient) { }
  getEvents() {
    return this.http.get<any>('assets/calendarEx/data/scheduleevents.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
    }
}
