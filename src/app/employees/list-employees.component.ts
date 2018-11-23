import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
 
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees : Employee[]=[
    {
      id:1,
      name:'mark',
      gender:'male',
      contactPreference:'Email',
      email:'hema@erty.com',
      dateOfBirth:new Date('32/56/6789'),
      department:'IT',
      isActive:true,
      photoPath:'assets/images/male.jpg'
    },
    {
      id:1,
      name:'Juhee',
      gender:'Female',
      contactPreference:'Email',
      email:'hema@erty.com',
      dateOfBirth:new Date('32/56/6789'),
      department:'IT',
      isActive:true,
      photoPath:'assets/images/female.jpg'
    }

];

  constructor(private _employeeservice:EmployeeService) { }

  ngOnInit() {
   console.log(this.employees);
    this.employees=this._employeeservice.getEmployees();
  }

}
