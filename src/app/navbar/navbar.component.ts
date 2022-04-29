import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { KavyaService } from "../kavya.service";
import {faSearch , faCartShopping, faSignOut} from "@fortawesome/free-solid-svg-icons"
import { HttpHeaders } from '@angular/common/http';

@Component ({
   selector :"app-navbar",
   templateUrl:"./navbar.component.html"
})
export class NavbarComponent{
   projecttitle:any = "Kavs's Cake Gallery"
   searchtext:any
   length:any
   color:any
   isloggedin:any
   faSearch:any = faSearch
   faCartShopping=faCartShopping
   faSignout=faSignOut
   constructor(private kavyaattende : KavyaService , private router : Router){
         this.isloggedin = localStorage["token"]?true:false
         if(this.isloggedin){
            var url = "https://apifromashu.herokuapp.com/api/cakecart"
            var headers = new HttpHeaders()
            headers = headers.append("authtoken",localStorage["token"])
            var body = {}
            var options = {
               headers:headers
            }
            this.kavyaattende.getCartItems(url,body,options).subscribe({
               next:(response:any)=>{
                  console.log("response from cart items api in navbar", response)
                  // this.kavyaattende.cartitems = response.data
                  this.length =  response.data?.length
               }
            })
         }
         
   }
   isAdmin:any = false

   adminUsers:any = ["ashu.lekhi0540@gmail.com"]

   ngDoCheck(){
      // this.length =  this.kavyaattende.cartitems?.length

      if(localStorage["token"]){
         this.isloggedin = true
         if(this.adminUsers.includes(localStorage["loggedinUser"])){
            this.isAdmin = true
         }
      }
      else{
         this.isloggedin =  false
         this.isAdmin = false
      }
   }


   logout(){
      localStorage.clear()
      window.location.href = "/"
   }
   search(){
      if(this.searchtext)
      this.router.navigate(["/search"], {queryParams:{q:this.searchtext}})
   }
}