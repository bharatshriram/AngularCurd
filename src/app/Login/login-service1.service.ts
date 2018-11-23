//import { Injectable } from '@angular/core';
import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Login } from '../models/login';

//import{LoginService} from '../Login/';

import { Http, Response, RequestOptions } from '@angular/http';

//import {map} from 'rxjs/operators';

import 'rxjs/add/operator/map';

import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class LoginService1Service {
  private BGLUrl = 'http://localhost:8086/SpringBootHibernateExample/login';
  constructor(private http:HttpClient)
  {

  }
  
}
