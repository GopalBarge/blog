import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: false });

import {
  ApiService,
  UserService,
  HeaderComponent,
  FooterComponent
} from './shared';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    rootRouting
  ],
  providers: [
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
