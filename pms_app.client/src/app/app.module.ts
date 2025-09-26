import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ButtonsComponent } from './components/shared/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'buttons', component: ButtonsComponent },
      { path: '', redirectTo: 'buttons', pathMatch: 'full' },
      { path: '**', redirectTo: 'buttons' }
    ]),
    ButtonsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
