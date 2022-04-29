import { Component, OnInit } from '@angular/core';
import { KavyaService } from '../kavya.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  userdetails:any = {}
  constructor(private kavya : KavyaService) {

   }
   addAddress(){
    // this.kavya.userdetails = this.userdetails
  }


  ngOnInit(): void {
  }

}

  
  
 

