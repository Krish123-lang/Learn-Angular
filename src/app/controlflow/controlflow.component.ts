import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflow',
  standalone: true,
  imports: [],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.css'
})
export class ControlflowComponent {
  a: number = 20
  b: number = 40

  items: string[] = ["apple", "ball", "cat", "dog", "egg"]

  cars = [{
    type: "Toyota",
    model: "Corolla",
    year: 2009
  }];
}
