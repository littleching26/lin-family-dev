import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendar } from 'primeng/fullcalendar';
import { HomePageService } from '../home-page/home-page.service';
import { Event, FamilySettings } from '../home-page/home-page.model';
import { Observable } from 'rxjs';
import { DateUtils } from '../../utils/Date-.utils';
import { FormGroup, FormBuilder, FormControl, Validators  } from '@angular/forms';
import { BasicDialogComponent } from '../basic/basic-dialog/basic-dialog.component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  items: Observable<any[]>;
  events: Event[];
  options: any;
  eventDialog: boolean = false;
  //家庭成員各種設定
  familySettings: FamilySettings[] = [];
  //家庭成員選單
  familyGroup: string[] = [];
  //表單
  form: FormGroup;

  constructor(private homePageService: HomePageService,
    private fb: FormBuilder
    ) {
  }

  @ViewChild('calendar') private calendar: FullCalendar;

  ngOnInit() {
    this.buildForm();

    //取得原有的日曆事件
    this.homePageService.getEvents().subscribe(events => {
      this.events = events;
      console.log('init event', this.events);
    });

    //取得家庭成員array
    this.homePageService.getFamilyGroup().subscribe(family => {
      this.familySettings = family;
      this.familyGroup = this.familySettings.map(m => m['name'])
    });

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: DateUtils.getNowDateString(),
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,
      dateClick: (date: any) => {
        console.log(date);
        this.eventDialog = true;
        this.form.controls.start.setValue(date.dateStr + ' 12:00')
      },
      eventClick: (data: any) => {
        console.log(data.event.id);
        this.eventDialog = true;
        this.form.patchValue(this.events.filter((f: Event) => f.id == data.event.id)[0]);
        console.log(this.form.getRawValue());
      }
    }
  }

  cancelEventDialog() {
    this.eventDialog = false;
    this.form.reset();
  }

  saveEvent() {
    this.form.controls.backgroundColor.setValue(
      this.familySettings.filter(f => f.name == this.form.controls.name.value)[0].color
    );
    this.homePageService.saveEvent(this.form.getRawValue());
    this.ngOnInit();
    this.eventDialog = false;

  }

  deleteEvent() {
    console.log('check');
    this
    // this.confirmationService.confirm({
    //   message: '真的要刪除嗎？',
    //   accept: () => {
    //     this.homePageService.deleteEvent(this.form.getRawValue());
    //     this.ngOnInit();
    //     this.eventDialog = false;
    //   }
    // });

  }

  buildForm() {
    this.form = this.fb.group({
      id: new FormControl(null),
      name: new FormControl('老爸', Validators.required),
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      memo: new FormControl(null, Validators.required),
      backgroundColor: new FormControl(null)
    });
  }

}
