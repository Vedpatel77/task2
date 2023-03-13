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

  isuseradmin:any=this.auths.isloggedin();
  logIn : boolean = false ;
  constructor(private router:Router,private auths:AuthenticationService ){
  }
  
  ngOnInit(){
    


  }


  check(){
    if(this.auths.isloggedin() == true){
      return true;
    }
    else if(this.auths.isloggedin() == false){
      return false;
    }
    else{
      return false;
    }
  } 
  gotologin(){
    // console.log(loginpage);

      this.router.navigate(['/login']);
  }
  logedinuseradmin(){
      // return localStorage.getItem('token');
  }
  logout(){
    
    // localStorage.removeItem('token');
    if(this.auths.islog == true){
        this.auths.islog=false;
        this.router.navigate(['']);    
      }
      else{
        alert("plese login!");       
      }
  }
}
