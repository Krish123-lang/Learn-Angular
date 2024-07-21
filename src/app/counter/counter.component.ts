import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  name = "Counter"
  counter = 0

  // increaseCounter() {
  //   this.counter += 1
  // }
  // decreaseCounter() {
  //   if (this.counter > 0) {
  //     this.counter -= 1
  //   }
  //   else {
  //     this.counter = 0
  //   }
  // }

  count(str: string) {
    { str === 'add' ? this.counter++ : (this.counter > 0 && this.counter--) }
  }
}
