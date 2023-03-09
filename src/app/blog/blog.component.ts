import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  blogdata:any;
  constructor(private blogservice:BlogService){}

   ngOnInit(): void {
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
 
}
