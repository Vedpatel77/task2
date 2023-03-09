import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { LoginComponent } from '../login/login.component';
// Router

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private router:Router ){

  }

  gotologin(){
    // console.log(loginpage);
    
      this.router.navigate(['/login']);
  }
}
