import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowTourComponent } from './tbody/show-tour/show-tour.component';
import {TourService} from "./service/tour.service";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TbodyComponent } from './tbody/tbody.component';
import {FormsModule} from "@angular/forms";
import { AccountComponent } from './account/account.component';
import { WellcomComponent } from './wellcom/wellcom.component';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowTourComponent,
    HeaderComponent,
    FooterComponent,
    TbodyComponent,
    AccountComponent,
    WellcomComponent,
    ImageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [TourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
