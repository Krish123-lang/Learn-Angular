import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribdir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribdir.component.html',
  styleUrl: './attribdir.component.css'
})
export class AttribdirComponent {
  div1BgColor: string = ''
  isDiv2Active: boolean = false

  num1: string = ''
  num2: string = ''

  isActive: boolean = false

  friendslist = [
    {
      name: 'Nishant',
      age: 25
    },
    {
      name: 'Shailesh',
      age: 45
    },
    {
      name: 'Abhishek',
      age: 36
    },
    {
      name: 'Akshay',
      age: 65
    },
    {
      name: 'Ashish',
      age: 12
    },
    {
      name: 'Uday',
      age: 31
    },
    {
      name: 'Mayank',
      age: 45
    },
    {
      name: 'Raju',
      age: 74
    },
  ]

  addRedBg() {
    this.div1BgColor = "red" // red class Name is created on css file
  }

  addBlueBg() {
    this.div1BgColor = "blue" // blue class Name is created on css file
  }

  toggleDiv2() {
    this.isDiv2Active = !this.isDiv2Active
  }
}
