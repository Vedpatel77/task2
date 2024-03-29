import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { userModel } from './user.modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  blogd:any;
  // ViewId?:number;
  // formvalue:any;
  showadd: Boolean = false;
  isuser: boolean = false;
  showupdate?:Boolean;
  userobj:userModel = new userModel();

       constructor(private blogdata:BlogService,private route:Router, private Admin : AuthenticationService){
             
       }

       ngOnInit(): void {
         this.getsuer();
         if (this.Admin.useru == true) {
          this.isuser = true;
         }
       }
      //  getrole(){
      //   this.Admin.role()
      //  }

       login = new FormGroup({
        name: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
        phone: new FormControl('',[Validators.required])
       })

       getvalue(){
        console.log(this.login.value);
        
       }

       getsuer(){
        this.blogdata.blog().subscribe((data)=>{
          // console.log("data",data);
          this.blogd=data;
         })
       }
       showaddbtn(){
        this.login.reset();
        this.showadd=true;
        this.showupdate=false;
       }

       postuserdetail(){

        // this.showupdate=false;
        // this.userobj.name=this.formvalue.value.name;
        // this.userobj.email=this.formvalue.value.name;
        // this.userobj.phone=this.formvalue.value.name;
        this.userobj.name=this.login.value.name;
        this.userobj.email=this.login.value.email;
        this.userobj.phone=this.login.value.phone;

        this.blogdata.postuser(this.userobj)
        .subscribe((res)=>{
          console.log(res);
          alert("user successfuly added");
          // this.login.reset();
          this.getsuer();

        }
        )
       }
      

       deleteuser(row:any){
        console.log(row.id);
        
        this.blogdata.deleteuser(row.id).subscribe((res)=>{
          alert("user deleted succesfuly");
          this.getsuer();
        })
       }
       viewuser(row:any){
        // this.ViewId=row.id;
        // console.log(this.ViewId);
        
          this.route.navigate(['viewuser',row.id]);
       }

       edituser(row:any){
        console.log(row);
        
        this.showadd=false;
        this.showupdate=true;
        this.userobj.id=row.id;
        this.login.controls['name'].setValue(row.name);
        this.login.controls['email'].setValue(row.email);
        this.login.controls['phone'].setValue(row.phone);
       }

       edituserdetail(){
        this.userobj.name=this.login.value.name;
        this.userobj.email=this.login.value.email;
        this.userobj.phone=this.login.value.phone;
        this.blogdata.updateuser(this.userobj,this.userobj.id)
        .subscribe((res)=>{
          alert("updated successfuly!");
          let ref=document.getElementById('cancel');
          ref?.click();
          this.getsuer();
        })
       }
}


// console.log(blogd);
