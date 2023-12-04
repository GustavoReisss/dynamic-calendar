import { Component, OnInit } from '@angular/core';
import { Day, Event } from './components/calendar/calendar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  eventos: Event[] = [
    {
      title: 'Início do Ciclo',
      date: '2023-12-15',
      backgroudColor: '#FF7700',
      fontColor: '#fff'
    },
    {
      title: 'Pauta da Prévia de Suptes',
      date: '2023-12-19',
      backgroudColor: '#FF7700',
      fontColor: '#fff'
    },
    {
      title: 'Pauta da Prévia de Suptes',
      date: '2023-11-30',
      backgroudColor: '#FF7700',
      fontColor: '#fff'
    }
  ]


  ngOnInit(): void {
      
  }

  handleDayClickEvent(day: Day) {
    console.log(day)
  }
}