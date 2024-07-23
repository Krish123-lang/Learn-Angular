import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structdir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structdir.component.html',
  styleUrl: './structdir.component.css'
})
export class StructdirComponent {
  isDiv1Visiable: boolean = true
  isDiv2Visiable: boolean = true

  num1: string = ''
  num2: string = ''

  isActive: boolean = false
  selectedState: string = ''

  show() {
    this.isDiv1Visiable = true
  }
  hide() {
    this.isDiv1Visiable = false
  }

  toggleDiv2() {
    this.isDiv2Visiable = !this.isDiv2Visiable
  }

  // Ng For
  cities: string[] = ['Brt', 'KTM', 'Pokhara', 'Lalitpur']

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

  isListVisible: boolean = true
  toggleList() {
    this.isListVisible = !this.isListVisible
  }

  isCitiesVisible: boolean = true
  toggleCities() {
    this.isCitiesVisible = !this.isCitiesVisible
  }
}
