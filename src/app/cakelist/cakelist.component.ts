import { Component, OnInit } from '@angular/core';
import { KavyaService } from '../kavya.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {
  constructor(private kavyaangular: KavyaService, private http : HttpClient) {
      var url = "https://apifromashu.herokuapp.com/api/allcakes"
      this.http.get(url).subscribe({
        next:(response:any)=>{
          console.log("Response from all cakes api" , response)
          this.cakes = response.data
        },
        error:(error)=>{
          console.log("Error from all cakes api" , error)
        }
      })
   }


  ascSort() {
    this.kavyaangular.PORT = 4200
    this.cakes = this.kavyaangular.ascending(this.cakes)
  }

  descSort() {
    this.cakes = this.kavyaangular.descending(this.cakes)
  }
  cakes:any = []


  

  ngOnInit(): void {
  }

}
