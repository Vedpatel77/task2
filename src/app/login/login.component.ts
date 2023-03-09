import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  public userdata: any;
  public emailname?: any = '';
  public passname?: any = '';
  userrole:any;
  logedin?:boolean=false;
  

  constructor(private auth: AuthenticationService, private router: Router) {
    // this.http.get('http://localhost:3000/Data').subscribe((item) => {
    //   console.log(item);
    // })

  }
  ngOnInit(): void {
    
    this.auth.logged_person().subscribe((data) => {
      console.log(data);

      this.userdata = data;

      
    })
    // console.log(this.userdata);

  }
  loginuser() {
    //  console.warn(this.log.value);
    this.emailname = this.log.value.email;
    this.passname = this.log.value.password;
    // this.check2();
    // this.emailname=emailn;
    // this.passname=passn;
    console.log(this.emailname);
    console.log(this.passname);


  }


  check(email:any,password:any) {
    console.log(email);
    console.log(password);
  

    for (let index = 0; index < this.userdata.length; index++) {
      // const element = array[index];

      let objectofdata = this.userdata[index];
      // console.log(this.emailname);
      // console.log(this.passname);
      // console.log(objectofdata.role);

      if (email === objectofdata.email && password === objectofdata.password && objectofdata.role === "admin") {
        this.logedin=true;

        this.router.navigate(['/list']);
       
      }
      else if(email === objectofdata.email && password === objectofdata.password && objectofdata.role === "user"){
        this.logedin=true;

        this.router.navigate(['/blog']);
      }
      console.log('complete');
      
    }
  }

  log = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  get email() {
    return this.log.get('email')
  }
  get pass() {
    return this.log.get('password')
  }
  



}


