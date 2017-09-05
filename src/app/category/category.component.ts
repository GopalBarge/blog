import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  BlogService } from '../shared';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent  implements OnInit {
  private sub: any;
  public posts:any;
  public catfollow:any;
     constructor(
       private route: ActivatedRoute,
       private blogService :BlogService
      ) { }
  
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        // this.id = +params['title']; // (+) converts string 'id' to a number
         this.blogService.getCategorypostsById(params['id']).subscribe(postData => {
        this.posts = postData.posts;
        this.catfollow = postData.catfollow;
     });
      });
    }
  
    ngOnDestroy() {
      this.sub.unsubscribe();
    }
  }
  