import { Component, OnInit } from '@angular/core';
import { KavyaService } from '../kavya.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  body: any = {};
  placingOrder: boolean = false;

  cartItems:Array<any> = [];

  cakeOrder: any ={
    cakes: {},
    price: 0,
    name: this.getAddressDetails().name,
    address: this.getAddressDetails().address,
    city: this.getAddressDetails().city,
    pincode: this.getAddressDetails().pincode,
    phone: this.getAddressDetails().phone,
    
  }

  constructor(private kavyaService: KavyaService, private router: Router, private ngxUiLoaderService: NgxUiLoaderService) {

    this.ngxUiLoaderService.start();
    let url = "https://apifromashu.herokuapp.com/api/cakecart";
    let myheaders = new HttpHeaders;

    myheaders = myheaders.append("authtoken", localStorage["token"]);

    const options = {

      headers: myheaders

    };
    this.kavyaService.getCartItems(url, this.body, options).subscribe({
      next: (response: any)=>{
        this.cartItems = response.data;
        this.cakeOrder.cakes = this.cartItems;
        this.ngxUiLoaderService.stop();
      },
      error: (error: any)=>{
        console.log("cart item Error is ", error);
        
      }
    });

    
  }

  totalCost: number = 0;

  findTotalCost() {
    this.totalCost = 0;
    this.cartItems.forEach(element => {
      
      this.totalCost += (element.price*element.quantity);
    });
  }

  getAddressDetails(): {cakes: any, price: number, name: string, address: string, city: string, pincode: string, phone: string} {
    return this.kavyaService.addressDetails;
  }

  
  

 
  ngOnInit(): void {
  }

  submit() {
    let url="https://apifromashu.herokuapp.com/api/addcakeorder/";
  

    let myheaders = new HttpHeaders;

    myheaders = myheaders.append("authtoken", localStorage["token"]);

    const options = {

      headers: myheaders

    };
    this.kavyaService.placeOrder(url, this.cakeOrder, options).subscribe({


      next: (response:any)=>{

        this.placingOrder = true;

        this.router.navigate([""]);

      },

      error: (error:any)=>{

        console.log(error);

      }

    });
  }

}

