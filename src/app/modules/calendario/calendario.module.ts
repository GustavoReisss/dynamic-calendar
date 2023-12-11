import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioComponent } from './calendario.component';
import { CalendarModule } from 'src/app/components/calendar/calendar.module';


@NgModule({
  declarations: [
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    CalendarModule
  ]
})
export class CalendarioModule { }
