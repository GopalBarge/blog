import { Component, OnInit } from '@angular/core';
import { UserService } from './shared';
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public mydata:any = "test";
  //public route:ActivatedRoute;
  constructor (
    private userService: UserService
   // private route: ActivatedRoute,
  ) {}

  ngOnInit() {    
    //console.log("active route:"+this.route);
  }
}

