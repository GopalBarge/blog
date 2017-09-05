import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  BlogService } from '../shared';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
  // styleUrls:['http:///oread.in/oread_files/oread-post.css']
})
export class BlogComponent implements OnInit {
private sub: any;
public post:any;
public comments:any;
   constructor(
     private route: ActivatedRoute,
     private blogService :BlogService
    ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // this.id = +params['title']; // (+) converts string 'id' to a number
       this.blogService.getPostByTitle(params['title']).subscribe(postData => {
      this.post = postData.post;
      this.comments = postData.comments;
   });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
