import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { HttpClientModule } from '@angular/common/http'; // add this line
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BasicDialogComponent } from './pages/basic/basic-dialog/basic-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BasicDialogComponent
  ],
  imports: [
    AppRoutingModule,
    AccordionModule,
    FullCalendarModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    DialogModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
