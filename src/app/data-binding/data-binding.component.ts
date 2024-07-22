import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule,], // importing FormsModule for using NgModel
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // For interpolation and Property binding
  courseName: string = "Angular 18"
  inputType = "checkbox"
  rollNo: number = 123
  isNepali: boolean = true
  currentDate: Date = new Date();

  showAlert(message: string) {
    alert(message)
  }

  mouseOverlogCon(log: string) {
    console.log(log)
  }

  // For Two way binding
  changeCourseName() {
    this.courseName = "React JS"
  }
  stateName: string = "Bagmati"

  // Signal
  firstName = signal("Krishna")

  changeFirstName() {
    this.firstName.set('Bob Marley')
  }

  constructor() { }
}
