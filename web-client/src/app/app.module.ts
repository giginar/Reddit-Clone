import {HeaderComponent} from "./header/header.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AuthService } from "./auth/shared/auth.service";
import { PostService } from "./shared/post.service";
import { PostModel } from "./shared/post-model";
import { SubredditService } from "./subreddit/subreddit.service";
import { SubredditModel } from "./subreddit/subreddit-model";
import { HomeComponent } from "./home/home.component";
import { SubredditSideBarComponent } from "./shared/subreddit-side-bar/subreddit-side-bar.component";
import { SideBarComponent } from "./shared/side-bar/side-bar.component";
import { PostTitleComponent } from "./shared/post-title/post-title.component";
import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    HomeComponent,
    SubredditSideBarComponent,
    SideBarComponent,
    SubredditService,
    PostTitleComponent,
    routes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AuthService,
    PostService,
    PostModel,
    SubredditService,
    SubredditModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
