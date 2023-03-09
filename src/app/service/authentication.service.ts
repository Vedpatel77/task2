import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private ahttp:HttpClient) { }
  
  logged_person(){
    return this.ahttp.get('http://localhost:3000/Data');
  }
  name1(props : any) {
    // const datad = props
    console.log(props);
    
  }

  loggedin(){
    return true;
  }
}
