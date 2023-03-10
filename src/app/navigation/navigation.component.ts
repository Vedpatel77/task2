import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
// import { LoginComponent } from '../login/login.component';
// Router

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{
  logIn : boolean = false ;
  constructor(private router:Router,private auths:AuthenticationService ){
  }

  ngOnInit(){
    console.log(this.auths.islog);
    if(this.auths.islog == true){
      this.logIn = true;
      console.log("yes You are logged in");
    }
    else{
      this.logIn = true;
      // alert("plese login!");       
    }
  }
    // if(this.auths.islog == true){
    //   this.logOut = true 
    //   console.log("1");
      
    // }
    // else{
    //   this.logOut = false
    //   console.log('2');
      
    // }
  // }
  gotologin(){
    // console.log(loginpage);
    
      this.router.navigate(['/login']);
  }
  logout(event:Event){
    if(this.auths.islog == true){
    
        this.auths.islog=false;
        this.router.navigate(['']);    
      }
      else{
        alert("plese login!");       
      }
  }
}
