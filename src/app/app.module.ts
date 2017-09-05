import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';

/*
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
*/
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
   { path: 'blog/:title', component: BlogComponent },
   { path: 'category/:id', component: CategoryComponent },
   { path: 'profile/:username', component: ProfileComponent }
  
];
const rootRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });


import {
  ApiService,
  UserService,
  BlogService,
  HeaderComponent,
  HeaderinnerComponent,
  FooterComponent,
  ShowPostComponent
} from './shared';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderinnerComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    CategoryComponent,
    ShowPostComponent,
    ProfileComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    rootRouting
  ],
  providers: [
    ApiService,
    UserService,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
