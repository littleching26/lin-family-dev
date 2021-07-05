import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Event } from '../home-page/home-page.model';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  constructor(private http: HttpClient,
    private afs: AngularFirestore) { }
  getEvents(): Observable<any> {
    return new Observable<any>(ob => {
      this.afs.collection('events').valueChanges().subscribe(result => {
        ob.next(result);
        ob.complete();
      });
    });
  }

  getFamilyGroup(): Observable<any> {
    return new Observable<any>(ob => {
      this.afs.collection('family_settings').valueChanges().subscribe(result => {
        ob.next(result);
        ob.complete();
      });
    });
  }

  saveEvent(saveEvent: Event): void {
    // 新增
    if (saveEvent.id == null) {
      saveEvent.id = this.afs.createId();
    }
    this.afs
      .collection("events")
      .doc(saveEvent.id)
      .set(saveEvent)
      .then(res => {
      });
  }

  deleteEvent(event: Event): void {
    this.afs
      .collection("events")
      .doc(event.id)
      .delete();
  }
}
