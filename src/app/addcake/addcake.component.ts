import { Component, OnInit } from '@angular/core';
import { KavyaService } from '../kavya.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrls: ['./addcake.component.css']
})
export class AddcakeComponent implements OnInit {
  file:any
  imageUrl:any


  getFile(event:any){
    this.file = event.target.files[0]
  }


  upload(){
     // hit the api
     var url = "https://apifromashu.herokuapp.com/api/upload"
     var formdata = new FormData()
    formdata.append("file",this.file)

    var myheaders =  new HttpHeaders()
    myheaders = myheaders.append("authtoken",localStorage["token"])
    var options = {
      headers:myheaders
    }
    this.kavya.uploadImage (url,formdata,options).subscribe({
      next:(response:any)=>{
        console.log("Response from image upload api", response)
        this.imageUrl = response.imageUrl
      },
      error:(error:any)=>{
        console.log("Error from image upload api" , error)
      }
    })
  }

  
  constructor(private kavya : KavyaService) { 
  }

  ngOnInit(): void {
  }

}
