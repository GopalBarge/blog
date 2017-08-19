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

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private http: Http
  ) { }

  getTestDataFromServer(){
    console.log("inside UserServices");
   return this.apiService.get('home.php');
 
  }
   getAll(): Observable<[string]> {
    return this.apiService.get('/')
           .map(data => data);
  }

  setData(data){
    console.log(JSON.stringify(data));
    this.myData = data;
  }
}
