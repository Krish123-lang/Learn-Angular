import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  userList: any[] = []
  constructor(private http: HttpClient) {
    // this.getAllUser() // use this code to call the below function automatically whenever the page refresh
  }

  getAllUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      this.userList = result;
    })
  }

  customerList: any[] = []
  getAllCustomers() {
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((customerResult: any) => {
      this.customerList = customerResult.data
    }, error => {
      debugger;  
    })
  }
}
