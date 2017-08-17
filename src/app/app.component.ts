import { Component, OnInit } from '@angular/core';
import { UserService } from './shared';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public mydata = "test";
  constructor (
    private userService: UserService
  ) {}

  ngOnInit() {
    console.log("inside AppComponent");
    this.userService.getTestDataFromServer();
    console.log("inside AppComponent"+this.userService.myData);
  }
}

