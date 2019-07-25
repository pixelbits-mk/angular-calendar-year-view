import { NgModule } from '@angular/core';
import { AngularCalendarYearViewComponent } from './angular-calendar-year-view.component';
import { BrowserModule, } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {PopoverModule} from 'ngx-bootstrap/popover'

@NgModule({
  declarations: [AngularCalendarYearViewComponent],
  imports: [
     CommonModule,
     PopoverModule.forRoot()
  ],
  exports: [AngularCalendarYearViewComponent]
})
export class AngularCalendarYearViewModule { }
