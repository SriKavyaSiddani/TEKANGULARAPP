import { Component, OnInit } from '@angular/core';
import { KavyaService } from '../kavya.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userdetails:any = {

  }

  users:any =[]
  constructor(private ashuservice: KavyaService) { }

  responseError:any


  signup() {
    var url = "https://apifromashu.herokuapp.com/api/register"
    this.ashuservice.signup(url,this.userdetails).subscribe({
      next:(response:any)=>{
        console.log("Response from signup api" , response)
        if(response.message=="User Already Exists") {
          this.responseError = "Invalid Email or Email already taken"
        }
      },
      error:(error)=>{
        console.log("Error from signup api" ,error)
      }
    })
  }

  deleteUser(index:any) {
    alert(index)
  }

  ngOnInit(): void {
  }

}
