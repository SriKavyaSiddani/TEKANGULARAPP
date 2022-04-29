import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KavyaService } from '../kavya.service';

@Component({
  selector: 'app-cakedetail',
  templateUrl: './cakedetail.component.html',
  styleUrls: ['./cakedetail.component.css']
})
export class CakedetailComponent implements OnInit {
  cakeid : any
  cake:any = {}
  isAdding:any = false;
  constructor(private route : ActivatedRoute  , private kavya:KavyaService , private router : Router) {
    this.cakeid = this.route.snapshot.params["cakeid"]
    //api hit
    var url = "https://apifromashu.herokuapp.com/api/cake/" + this.cakeid
    this.kavya.getCakedetails(url).subscribe({
      next:(response:any)=>{
        console.log("Response from cake details api", response)
        this.cake = response.data
        console.log(this.cakeid)
      },
      error:(error)=>{
        console.log("Error from cake details api", error)
      }
    })
   }

   addToCart() {
     if(localStorage["token"]) {
       this.isAdding = true
      let myheaders = new HttpHeaders()
     myheaders = myheaders.append("authtoken" , localStorage["token"])
     var url = "https://apifromashu.herokuapp.com/api/addcaketocart/"
     var options = {
       headers:myheaders
     }
     var body = {
       cakeid:this.cake.cakeid,
       name:this.cake.name,
       weight:this.cake.weight,
       price:this.cake.price,
       image:this.cake.image,
     }
     this.kavya.addCakeToCart(url,body,options).subscribe({
       next:(response:any)=>{
         console.log("Response from add to cart api", response)
       },
       error:(error: any)=>{
         console.log("Error from add to cart api" , error)
       }
     })
    }
     else {
        this.router.navigate(['/login']);
     }
     
   }
  ngOnInit(): void {
  }

}
