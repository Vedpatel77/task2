import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private ahttp:HttpClient) { }
  islog?: boolean;
  adminu?:Boolean;
  useru?:Boolean;
  
  logged_person(){
    return this.ahttp.get('http://localhost:3000/Data');
  }


  loged(props : any) {
    // const datad = props
    this.islog=props;
    // console.log(props);
    
  }

  logout(){
    this.islog==false;
    return false;
  }

  AdminLoged(admin : boolean , user : boolean){
    this.useru=user; 
  } 

  isloggedin(){ 
    if (this.islog==true) {
      return true;
    } else {
      return false;
    }
  }
}
