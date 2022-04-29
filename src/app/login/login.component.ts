import { Component, OnInit } from '@angular/core';
import { KavyaService } from '../kavya.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ashuservice : KavyaService, private router : Router) { 

  }
  responseError:any

  userdetails:any = {

  }

  login() {
      var url="https://apifromashu.herokuapp.com/api/login"
      this.ashuservice.login(url,this.userdetails).subscribe({
        next:(response:any)=>{
          console.log("Response from login api", response)
          if(response.token) {
            localStorage["token"] = response.token
            this.router.navigate(["/"])
          }
          else{
            this.responseError = "Invalid Login"
          }
        },
        error:(error)=>{
          console.log("Error from login api" , error)
        }
      })
  }
  ngOnInit(): void {
  }

}
