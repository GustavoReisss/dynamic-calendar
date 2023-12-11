import { Component } from '@angular/core';
import { Day, Event } from 'src/app/components/calendar/calendar.component';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent {
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

  url = "https://gustavo-democloudfrontbucket.s3.sa-east-1.amazonaws.com/teste2.pptx?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXNhLWVhc3QtMSJGMEQCIGvbKrir6glhF6v9ak4nzFqhSf1l07JRwvrjODY%2FCrBzAiBOWv%2BmgRKYUhIHZfVDT42q7PCRDmzbQm9C%2FH%2BBbkx5giroAghsEAAaDDE0MTA4NDk2NTAwNSIMQsTOwkNLUqWcG7s1KsUCgTiXBw9sl47KsvzI2O95v9ZwVvRO6cOVjYb9qzcqnFLYDiZ9A2U03GSui8NZ8ulqzsjHWvG27jMGZ5ryTMMOva4kjDMCMap6CHszr1aHH49wpVgU8FraRBUlimykvC2rGQXvjCZmJuM3J2muPSmFMPF46gXROyGYCLGhEhXaxlWL8UPhTjcQWaVIh%2F6iiBury21PINlRfGzD6V4CSvHZpu6FCWFkqdgtFhClprZHhcNsXcXrfzpyKquuo9OzgWrsbJKJyr%2FcceQhJJ%2Bje3wBShXHbC8%2FKaBHqZyBjwXya0YeGZ6UynBl4ovuTqCaqn%2FpcG0jI2qz8daxPHDqrTQxT6u%2BLe0aZaLdc16Ivq1h9NpN4t5qYeSNCx0M4Rts7knbG9rNmNOs2M%2FNEAa57EtbJFIU8bL7tJKmsn2KcUaglB90wmdVszDdn7qrBjq0AnVfK1iwrIW%2FrixKmwCWdp2X8g9HHRdfWCcXQZ0c0QF9hgBEbq%2BkIfIvd2NIWc7fl%2FvK4OEHwS8zMeAlch1mGAGNtO9O387jxU3W%2FEAd7xV0IuRhkASnUf%2BYNbuMQJyWVM5ZlLyMPITTOe7rgqJ4d%2Fnz2L7nx3wrWK4fqYQj9ArN0Y2MKESjo0rvB743EpcjIoxC%2Ffk%2FPAc4h%2BjvNz%2BPkWVpjwlK5%2FoHM%2Fi23kUg3cCjnq9kMcHQTBszowIZEoWqJO68Pxl6K6N34Z5WmD6otXuiLqgEh4kdrKD%2BAJQKIaDdaCm2Z9oVlQ%2B9bNhchmfLvI6abNs5VQRb9CsVRFlOAnInXTIRHyk7fSypThQj7hVQMYbLTNNPOTvrha0OKBOmhCegWQndqfMSUENFE6v1N4V%2FrBzu&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231205T025214Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASBWKRXCG645RMHSF%2F20231205%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Signature=21837b1b22145d8be2671db0456ad56fdf2cad089f5ba6a6f3264d3382ffb517"

  get encondedURL() {
    return encodeURI(this.url)
  }
  ngOnInit(): void {
      
  }

  handleDayClickEvent(day: Day) {
    console.log(day)
  }
}
