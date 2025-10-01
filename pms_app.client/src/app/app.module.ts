import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainModule } from "./components/shared/shared.module";

@NgModule({
  declarations: [
   
  ],
  imports: [
      AppComponent,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    MainModule
    RouterModule,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
  ,
})
export class AppModule { }
