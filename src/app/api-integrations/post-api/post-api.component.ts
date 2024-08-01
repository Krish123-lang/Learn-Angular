import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../service/department.service';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";
import { MyButtonComponent } from "../../reusableComponent/my-button/my-button.component";

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, JsonPipe, AlertComponent, MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {
  deptObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }

  http = inject(HttpClient);

  constructor(private deptSrv: DepartmentService) { };

  ngOnInit(): void {
    this.getDepartment()
  }
  // onSave() {
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any) => {
  //     if (res.result) {
  //       alert("Department created Successfully !")
  //       this.getDepartment()
  //     }
  //     else {
  //       alert(res.message)
  //     }
  //   })
  // }


  getData(data: any) { }

  
  onSave() {
    this.deptSrv.saveNewDept(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department created Successfully !")
        this.getDepartment()
      }
      else {
        alert(res.message)
      }
    })
  }


  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department Updated Successfully !")
        this.getDepartment()
      }
      else {
        alert(res.message)
      }
    })
  }

  depList: any[] = []

  // getDepartment() {
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {
  //     this.depList = res.data;
  //   })
  // }

  getDepartment() {
    this.deptSrv.getAllDept().subscribe((res: any) => {
      this.depList = res.data;
    })
  }

  onEdit(data: any) {
    this.deptObj = data
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete ?")
    if (isDelete) {
      this.http.delete("https://projectapi.gerasim.in/api/Complaint//DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res: any) => {
        if (res.result) {
          alert("Department deleted Successfully !")
          this.getDepartment()
        }
        else {
          alert(res.message)
        }
      })
    }
  }
}
