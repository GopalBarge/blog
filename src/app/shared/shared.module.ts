import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { ShowPostComponent } from './src/app/shared/show-post/show-post.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
  
  ],
  exports: [
  
    CommonModule,
 
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
  ]
})
export class SharedModule { }
