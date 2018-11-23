import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  sessionStorage:any;

  ngOnInit() {
  }


  
  constructor(private _router :Router){}
  
  // this._router
 public logout() {  
 alert("-->");
 this._router.navigate(['/login']);
};

}
