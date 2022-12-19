import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { DisplayproductsComponent } from './components/displayproducts/displayproducts.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingpageComponent,
    NavbarComponent,
    CreateproductComponent,
    DisplayproductsComponent,
    DialogComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
