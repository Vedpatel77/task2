import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit,OnDestroy {
  idv:any;
  blogdata:any;
  private routeSub!: Subscription;
constructor(private route: ActivatedRoute,private views:BlogService) { }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
ngOnInit() {
  this.routeSub = this.route.params.subscribe(params => {
    console.log(params); //log the entire params object
    this.idv=params['ViewId'];
    console.log(this.idv);
    
    // console.log(params['id']); //log the value of id
    // this.id=params['id'];
    // console.log(this.id);
    
  });
  this.viewblogdetial()
}
 
viewblogdetial(){
  this.views.viewblog(this.idv).subscribe((res)=>{
    this.blogdata=res;
    
  })
 }
}
