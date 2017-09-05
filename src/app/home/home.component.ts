import { Component, OnInit } from '@angular/core';

import { BlogService ,UserService } from '../shared';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public posts:any;
  constructor(   
    private userService: UserService,
    private blogService: BlogService
  ) {}
  isAuthenticated: boolean;
  ngOnInit() {
   this.blogService.getBlogs().subscribe(data => {
      this.posts = data;
  });

  
  }
}
