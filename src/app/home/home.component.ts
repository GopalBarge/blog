import { Component, OnInit } from '@angular/core';

import {  UserService } from '../shared';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public posts:any;
  constructor(   
    private userService: UserService
  ) {}
  isAuthenticated: boolean;
  ngOnInit() {
   this.userService.getTestDataFromServer().subscribe(data => {
      this.posts = data;
   });
  
  }
}
