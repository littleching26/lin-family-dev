import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendar } from 'primeng/fullcalendar';
import { HomePageService } from '../home-page/home-page.service';
import { CalendarData } from '../home-page/home-page.model';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { DateUtils } from '../../utils/Date-.utils';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  items: Observable<any[]>;
  events: any[];
  options: any;
  constructor(private homePageService: HomePageService,
    private afs: AngularFirestore) {
  }

  @ViewChild('calendar') private calendar: FullCalendar;

  ngOnInit() {
    //撈db資料
    this.afs.collection('events').valueChanges().subscribe(result => {
      this.events = result;
    });

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: DateUtils.getNowDateString(),
      customButtons: {
        myCustomButton: {
          text: '自定義按鈕', click: function () { alert('點選了自定義按鈕!'); }
        }
      },
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,
      dateClick: (e: any) => {
        console.log(e);
      }
    }
  }



}
