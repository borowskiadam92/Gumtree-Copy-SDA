import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {DropdownDirective} from "./shared/directive/dropdown.directive";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoryItemComponent } from './pages/main-page/category-item/category-item.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { OfferPageComponent } from './pages/offer-page/offer-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import { AuthPageComponent } from './auth/auth-page/auth-page.component';
import { LoadingIndicatorComponent } from './common/loading-indicator/loading-indicator.component';
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import {EditOfferPageComponent} from "./pages/offer-page/edit-offer/edit-offer-page.component";
import {CommonModule, DatePipe} from "@angular/common";
import {OfferItemComponent} from "./pages/category-page/offer-item/offer-item.component";

@NgModule({
  declarations: [
    RegisterPageComponent,
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    MainPageComponent,
    CategoryItemComponent,
    CategoryPageComponent,
    OfferPageComponent,
    EditOfferPageComponent,
    AuthPageComponent,
    LoadingIndicatorComponent,
    OfferItemComponent
  ],
  imports: [
    BrowserModule, //dostep do przegladarki?
    AppRoutingModule, //routing
    HttpClientModule, //klientHttp
    ReactiveFormsModule,  //formularze
    FormsModule,
    CommonModule
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
