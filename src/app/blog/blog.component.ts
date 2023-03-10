import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { blogModel } from './blog.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  showadd: Boolean = false;
  showupdate?:Boolean;
  blogobj:blogModel = new blogModel();
  blogdata:any;
  // isuser: boolean = false;
  constructor(private blogservice:BlogService,private Admin : AuthenticationService){}

   ngOnInit(): void {
      // this.getblog();
      // if (this.Admin.useru == true) {
      //  this.isuser = true;
      // }
    
     this.blogservice.blogs().subscribe(res=>{
      console.log(res);
      // res.array.forEach((element:any) => {
        
      // });
      this.blogdata=res;
      // this.blogdata.forEach((element:any) => {
      //   console.log(element);
        
      // });
      // console.log(this.blogdata);
      

      
     })
   }

   showaddbtn(){
    this.login.reset();
    this.showadd=true;
    this.showupdate=false;
   }

   login = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required])
   })
   
   getvalue(){
      console.log(this.login.value);
   }

    getblog(){
      this.blogservice.blogs().subscribe((res)=>{
        this.blogdata=res;
      })
    }

    postblog(){
      this.blogobj.title=this.login.value.name;
        this.blogobj.description=this.login.value.email;
        console.log(this.blogobj.description);
        
        this.blogobj.url=this.login.value.phone;

        this.blogservice.postblog(this.blogobj)
        .subscribe((res)=>{
          console.log(res);
          alert("user successfuly added");
          this.login.reset();
          this.getblog();

        }
        )
    }

    editblogdetail(blog:any){
      console.log(blog);
        
        this.showadd=false;
        this.showupdate=true;
        this.blogobj.id=blog.id;
        this.login.controls['name'].setValue(blog.title);
        this.login.controls['email'].setValue(blog.description);
        this.login.controls['phone'].setValue(blog.url);

    }

    editblog(){
        this.blogobj.title=this.login.value.name;
        this.blogobj.description=this.login.value.email;
        this.blogobj.url=this.login.value.phone;
        this.blogservice.updateblog(this.blogobj,this.blogobj.id)
        .subscribe((res)=>{
          alert("updated successfuly!");
          let ref=document.getElementById('cancel');
          ref?.click();
          this.getblog();
        })
    }


   deleteblog(e:any){
    console.log(e);
    
    this.blogservice.deleteblog(e.id).subscribe((res)=>{
      alert("user deleted succesfuly");
      this.getblog();
    })
   }
 
}
