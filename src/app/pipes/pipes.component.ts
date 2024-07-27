import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../customPipe/na.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, JsonPipe, AsyncPipe, NaPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  birthday = "2002-09-01"
  currentDate = new Date();

  // Its show time
  currentTime: Observable<Date> = new Observable<Date>;
  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()))
  }

  student = {
    name: 'krishna',
    city: 'ktm',
    empId: 123,
    state: ''
  }
}
