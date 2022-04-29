import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyTxtRecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class KavyaService {

  PORT = 8080
  loggedinUser:any
  signup(url:any,body:any) {
    return this.http.post(url,body)
  }

  login(url:any,body:any) {
    return this.http.post(url,body)
  }
  placeOrder(url:any,body:any, options: any) {
    return this.http.post(url,body, options);
  }

  getCakedetails(url:any) {
      return this.http.get(url)
  }

  getCartItems(url: string, body: any, options: any) {
    return this.http.post(url, body, options);
  }

  uploadImage(url: string, body: any, options: any) {
    return this.http.post(url, body, options);
  }

  removeCakeFromCart(url: string, body: any, options: any) {
    return this.http.post(url, body, options);
  }


addressDetails: {cakes: any,price: number,name: string,address: string,city: string,pincode: string,phone: string} = {cakes: [],price: 0,name: "",address: "",city: "",pincode: "",phone: ""}; addAddressDetails(obj: {cakes: any, price: number, name: string, address: string, city: string, pincode: string, phone: string}) {this.addressDetails = obj;}



  searchCakes(url:any) {
    return this.http.get(url)
  }

  addCakeToCart(url:any, body:any, options:any) {
    return this.http.post(url,body,options)
  }
  ascending(data:any) {
    data.sort((obj1:any,obj2:any)=>{
      return obj1.price-obj2.price
    })
    return data
  }

  descending(data:any) {
    data.sort((obj1:any,obj2:any)=>{
      return obj2.price-obj1.price
    })
    return data
  }
  constructor(private http: HttpClient) { }
}