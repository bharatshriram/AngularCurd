import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
//import {AccountService} from'./services/account.service';



@Component({
  

  templateUrl: './logout.html'
  
})
export class LogoutComponent {

  

  constructor(private _router :Router){}
   
       // this._router
      public logout() {  
      alert("-->");
      this._router.navigate(['/login']);
};
}

