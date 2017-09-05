import { Component, OnInit } from '@angular/core';
import {  UserService } from '../shared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  followings: any;
  follows: any;
  profileData: any;

  public posts: any;
  public sub: any;

  isPost: boolean;
  isFollow:boolean;
  isFollowing:boolean;

  constructor(   
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.userService.getUserPosts(params['username']).subscribe(data => {
      this.isPost = true;
      this.posts = data.oPosts;
       this.profileData  = data.oProfileData;
       this.follows = data.oFollows;
       this.followings =  data.oFollowings;
    });
   
  });
  }

  showPost(){
    this.isPost = true;
    this.isFollow = false;
    this.isFollowing = false;
  }
  showFollows(){
    this.isPost = false;
    this.isFollow = true;
    this.isFollowing = false;
  }
  showFollowings(){
    this.isPost = false;
    this.isFollow = false;
    this.isFollowing = true;
  }

  followUser(userId){
    alert(userId);
  }

ngOnDestroy() {
  this.sub.unsubscribe();
}
}