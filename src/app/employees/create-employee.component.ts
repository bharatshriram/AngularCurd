import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import{EmployeeService} from './employee.service';
import{Router} from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
 
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto=false;
  empForm:any;
  departments:Department[]=[
    {
    id:1,name:'HelpDesk',
  },{
    id:2,name:'HelpDesk',
  },{
    id:3,name:'HelpDesk',
  }
]
employee:Employee={
  id: null,
 name:null,
 gender:null,
 contactPreference:null,
 email:null,
 dateOfBirth:null,
 department:null,
 isActive:null,
 photoPath:null
}
  constructor( private _employeservice :EmployeeService,private _router:Router) { }
  togglePreviewPhoto(){
    this.previewPhoto =!this.previewPhoto;
  }
  saveEmployee(){
this._employeservice.save(this.employee);
//console.log(empForm.value);
this._router.navigate(['list']);

  }
  ngOnInit() {
  }

}
