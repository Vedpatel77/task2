import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AuthenticationService } from './service/authentication.service';
import { BlogService } from './service/blog.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UserauGuard } from './guard/userau.guard';
import { HomeblogComponent } from './homeblog/homeblog.component';
import { ViewblogComponent } from './viewblog/viewblog.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    ListComponent,
    BlogComponent,
    ViewuserComponent,
    HomeblogComponent,
    ViewblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService,BlogService,UserauGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
