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
}
