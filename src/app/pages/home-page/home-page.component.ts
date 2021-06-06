import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {FullCalendar} from 'primeng/fullcalendar';
import {HomePageService} from '../home-page/home-page.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  items: Observable<any[]>;

  events: any[];
  options: any;

  constructor(private homePageService: HomePageService,
    private db: AngularFirestore){}

  @ViewChild('calendar') private calendar: FullCalendar;
  
  ngOnInit() {
    this.items = this.db.collection('items').valueChanges();

    this.homePageService.getEvents().then(events => {this.events = events;});

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2017-02-01',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: true
    }
  }
}
