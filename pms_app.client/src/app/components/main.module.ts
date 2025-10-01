import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "./shared/button/button.component";

@NgModule({
  declarations: [
  ],
  imports: [
    DashboardComponent,
    RouterModule,
    ButtonComponent
 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
