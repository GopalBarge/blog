import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],

})
export class ShowPostComponent implements OnInit {
//@Input() data:any;
public _post:any;
  constructor() { }

  ngOnInit() {
 // this.post = this.data;
 // console.log(JSON.stringify(this.data));
  }
  @Input()
  set post(name : any ){
      this._post = name; 
  }
  get post(){
      return this._post;
  }
}
