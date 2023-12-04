import { Component, Input, Output, EventEmitter } from '@angular/core';

const CURRENT_DATE = new Date()

export interface Day {
  date: Date
  day: number
  event?: Event
  formatedData: string
  inactive: boolean
}

export interface Month {
  month: number,
  year: number
}

export interface Event {
  title: string,
  date: string,
  backgroudColor: string
  fontColor: string
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  
  @Input() width: string = '500px'
  @Input() months: number = 2
  @Input() size: string = 'L'
  @Input() events: Event[] = []

  @Output() dayClick = new EventEmitter<Day>()
  
  selectedMonth: number = CURRENT_DATE.getMonth()
  selectedyear: number = CURRENT_DATE.getFullYear()

  constructor() {}

  get DAYS_LABELS() {
    return ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
  }

  get DAYS() {
    return ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
  }

  get MONTHS() {
    return ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  }

  get controlerText(): string {
    const monthsAvailable = this.monthsAvailable
    let text = this.calendarDateHeader(monthsAvailable[0])
    
    if (this.months > 1) {
      text += ` - ${this.calendarDateHeader(monthsAvailable[this.months-1])}`
    }

    return text
  }

  get monthsAvailable(): Month[] {
    return Array(this.months).fill(null).map((_, index) => {
      const date = new Date(this.selectedyear, this.selectedMonth + index)
      return {
        "month": date.getMonth(),
        "year": date.getFullYear()
      }
    })
  }

  get formatedCurrentDate(): string {
    const dayOfMonth = CURRENT_DATE.getDate()
    const dayOfWeek = CURRENT_DATE.getDay()
    const month = CURRENT_DATE.getMonth()
    const year = CURRENT_DATE.getFullYear()

    return `${this.DAYS[dayOfWeek]}, ${dayOfMonth} de ${this.MONTHS[month]} de ${year}`
  }

  calendarDateHeader(month: Month) {
    return `${this.MONTHS[month.month]} de ${month.year}`
  }

  emitDayClick(day: Day) {
    this.dayClick.emit(day)
  }

  changeMonth(incrementalNumberOfMonths: number) {
    const newDate = new Date(this.selectedyear, this.selectedMonth + incrementalNumberOfMonths)
    this.selectedyear = newDate.getFullYear();
    this.selectedMonth = newDate.getMonth();
  }

  showMonth(){ 
    console.log(this.events)
    console.log(this.getMonth(2023, 11))
  }

  getMonth(year: number, month: number): Day[] {
    const firstDayOfMonth = new Date(year, month, 1)
    const lastDateOfMonth = new Date(year, month + 1, 0)

    const dayOfWeekOfFirstDayOfMonth = firstDayOfMonth.getDay()
    const dayOfWeekOfLastDayOfMonth = lastDateOfMonth.getDay()
    
    const lastDay = lastDateOfMonth.getDate()

    const days = new Array(lastDay + dayOfWeekOfFirstDayOfMonth + (6 - dayOfWeekOfLastDayOfMonth))
      .fill("")
      .map((_, index) => {
        const day = (index + 1) - dayOfWeekOfFirstDayOfMonth
        const date = new Date(year, month, day)
        const formatedDate = date.toLocaleDateString('en-ca')

        return {
          date: date,
          day: date.getDate(),
          formatedData: formatedDate,
          event: this.events.find(el => el.date == formatedDate),
          inactive: day < 1 || day > lastDay
        }
      })

    return days
  }
}
