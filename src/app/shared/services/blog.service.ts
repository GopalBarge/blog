import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
@Injectable()
export class BlogService {
  private restUrl = "blog.php?"
  private restUrlForCategory = this.restUrl+'action=categoryposts';
   constructor(
    private apiService: ApiService,
    private http: Http
  ) { }
 getPostByTitle(title){   
   return this.apiService.get(this.restUrl+'title='+title); 
  }

  getCategorypostsById(catId){
    return this.apiService.get(this.restUrlForCategory+'&id='+catId); 
  }

  getBlogs(){
    return this.apiService.get('blog.php');
  }
}
