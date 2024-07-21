import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  standalone: true,
  imports: [],
  templateUrl: './template-reference.component.html',
  styleUrl: './template-reference.component.css'
})
export class TemplateReferenceComponent {
  displayName = ''
  getName(value: string) {
    console.log(value); // prints whatever you have entered in the textbox
    this.displayName = value
  }

  // get heading
  getHead(value: string) {
    console.log(value);
  }

  // Get full name
  displayFullName = ''
  getFullName(fname: string, lname: string) {
    // console.log(fname, lname);
    this.displayFullName = fname + " " + lname
  }
}
