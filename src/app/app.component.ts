import { Component } from '@angular/core';
import { KavyaService } from './kavya.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private kavya:KavyaService){

  }
}
