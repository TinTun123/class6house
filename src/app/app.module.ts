import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown, faArrowRight, faBars, faPhoneSquare, fas } from '@fortawesome/free-solid-svg-icons';


import { AppComponent } from './app.component';
import { DropService } from './navbar/dropdown.service';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { NavBar } from './navbar/navbar.component';

import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { ModalModule } from './_modal/modal.module';
import { SandBoxComponent } from './sandbox/sandbox.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck';
import { StoreModule } from './modal/store.module';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { LocationComponent } from './location/location.component';
import { ImgModal } from './img-modal/imgModal.component';
import { modalData } from './home/imgModal.data';
import { ProductComponent } from './products/product.component';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons/faDotCircle';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    NavBar,
    SandBoxComponent,
    FooterComponent,
    StoreComponent,
    AboutUsComponent,
    LocationComponent,
    ImgModal,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ModalModule,
    RouterModule,
    routing,
    StoreModule,
    CommonModule
  ],
  providers: [DropService, modalData],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(library: FaIconLibrary) {
      library.addIcons(
          faBars, 
          faArrowRight, 
          faArrowDown, 
          faFacebookSquare, 
          faInstagramSquare, 
          faPhoneSquare, 
          faTruck,
          faDotCircle
        );
    
    }

 }
 