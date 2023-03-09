import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit,OnDestroy {
    // constructor(private views:BlogService){
   idv:any; 
   userdata:any;
 
    // }
    private routeSub!: Subscription;
constructor(private route: ActivatedRoute,private views:BlogService) { }
ngOnInit() {
  this.routeSub = this.route.params.subscribe(params => {
    console.log(params); //log the entire params object
    this.idv=params['ViewId'];
    console.log(this.idv);
    
    // console.log(params['id']); //log the value of id
    // this.id=params['id'];
    // console.log(this.id);
    
  });
  this.viewpersondetial()
}

viewpersondetial(){
  this.views.viewuser(this.idv).subscribe((res)=>{
    this.userdata=res;
    
  })
}

ngOnDestroy() {
  this.routeSub.unsubscribe();
}

    // viewuser(paramas['id']){
    //   console.log(row.id);
      
    //   this.views.viewuser(row.id).subscribe((res)=>{
    //     console.log(res);       
    //   })
    // }
}
