import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ButtonsComponent } from './components/shared/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    ButtonsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
