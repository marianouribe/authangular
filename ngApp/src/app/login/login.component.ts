import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

// import { Toastr } from 'toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  authlogin = {loginOk: false, loginEvents: true}

  constructor(private _auth: AuthService) { }

  ngOnInit() {
    // Toastr.success("Login successefully")
  }
  
  loginUser(){
   
    // console.log(this.authlogin.loginOk)
    
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => (
          console.log(res)  ,
          this.authlogin.loginOk = true,
          this.authlogin.loginEvents = false
          // Toastr.success("Login successefully")
           ),
        err => console.log(err)
      )
      
    // console.log(this.loginUserData)
  }
}
