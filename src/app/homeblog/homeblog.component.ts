import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-homeblog',
  templateUrl: './homeblog.component.html',
  styleUrls: ['./homeblog.component.css']
})
export class HomeblogComponent implements OnInit {
  constructor(private route:Router,private service:BlogService){}

  homeblogdata:any;

  loginpage(){
    this.route.navigate(['/login']);
  }
  ngOnInit(): void {
    this.service.home_blog().subscribe((res)=>{
      this.homeblogdata=res;
    })
  }


}
