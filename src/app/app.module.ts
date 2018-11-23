import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import {LoginComponent} from './Login/login.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import {RouterModule,Routes} from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { EmployeeService } from './employees/employee.service';
import { HomeComponent } from './home/home.component';
import {LoginService} from './Login/login.service';
import {LogoutComponent} from './Login/logout';


const appRoutes: Routes =[
  
  {path:'home', component:HomeComponent,
  children: [{path:'list', component:ListEmployeesComponent},
  { path: 'create', component:  CreateEmployeeComponent},
  { path: 'logout', component:  LogoutComponent}
]},
  //{path:'home/create', component:CreateEmployeeComponent},
  {path:'login', component:LoginComponent},
  //{path:'home', component:HomeComponent},
  {path:'', redirectTo: '/login' ,pathMatch:'full'},
 

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

