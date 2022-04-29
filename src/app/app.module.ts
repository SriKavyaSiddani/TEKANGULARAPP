import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CakeComponent } from './cake/cake.component';
import { SignupComponent } from './signup/signup.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { CartComponent } from './cart/cart.component';
import { HighlightDirective } from './highlight.directive';
import { DiscountPipe } from './discount.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"
import {NgxUiLoaderModule, NgxUiLoaderHttpModule} from "ngx-ui-loader"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,NavbarComponent, LoginComponent, CarouselComponent, CakeComponent, SignupComponent, CakelistComponent, HomeComponent, SearchComponent, ForgotComponent, AddcakeComponent, PagenotfoundComponent, CakedetailComponent, CartComponent, HighlightDirective, DiscountPipe, CheckoutComponent, AddressComponent, PaymentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({showForeground: true,}),
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

