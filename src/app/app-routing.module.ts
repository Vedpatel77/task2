import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UserauGuard } from './guard/userau.guard';
import { HomeblogComponent } from './homeblog/homeblog.component';

const routes: Routes = [
  {path:'',component:HomeblogComponent},
  {path:'login',component:LoginComponent},
  {path:'list',component:ListComponent,canActivate:[UserauGuard]},
  {path:'blog',component:BlogComponent,canActivate:[UserauGuard]},
  {path:'viewuser/:ViewId',component:ViewuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
