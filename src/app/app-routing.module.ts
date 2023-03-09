import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UserauGuard } from './guard/userau.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'list',component:ListComponent,canActivate:[UserauGuard]},
  {path:'blog',component:BlogComponent},
  {path:'viewuser/:ViewId',component:ViewuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
