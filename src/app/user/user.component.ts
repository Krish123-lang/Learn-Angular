import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name = "Krishna User"

  date = new Date();
  age: number = 23;
  typeage = typeof 23;

  // this is a method BTW
  greetUser(username: string) {
    return `Hello, ${username}`
  }

  clickme(uname: string) {
    console.log(`Konichiwa, ${uname}`)
    alert(`Konichiwa, ${uname}`)
  }

  condition: boolean = false;
}
