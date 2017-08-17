import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
@Injectable()
export class UserService {
  public myData = "initial";
  constructor(
    private apiService: ApiService,
    private http: Http
  ) { }

  getTestDataFromServer(){
    console.log("inside UserServices");
    this.apiService.get('/')
    .subscribe(
      data => this.setData(data)     
    );
 
  }

  setData(data){
    this.myData = data;
  }
}
