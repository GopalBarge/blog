import {ModuleWithProviders, NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { HomeAuthResolver } from './home-auth-resolver.service';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule
  ],
  declarations: [HomeComponent],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule { }
