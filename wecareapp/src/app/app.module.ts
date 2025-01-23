import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgChartsModule} from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReservationCardComponent } from './components/reservationCard/reservationCard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './utils/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SigninComponent } from './components/signin/signin.component';
import { SginupComponent } from './components/sginup/sginup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [	
    AppComponent,
    ReservationCardComponent,
    NavbarComponent,
    FooterComponent,
    TabsComponent,
    SigninComponent,
    SginupComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
