import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { EmailInputComponent } from './email-input/email-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextareaInputComponent } from './textarea-input/textarea-input.component';
import { CommonModule } from "@angular/common";
import { SelectInputComponent } from './select-input/select-input.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { DatetimeInputComponent } from './datetime-input/datetime-input.component';
import { SwitchInputComponent } from './switch-input/switch-input.component';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';

@NgModule({
  declarations: [
    EmailInputComponent,
    PasswordInputComponent,
    TextInputComponent,
    TextareaInputComponent,
    SelectInputComponent,
    SearchInputComponent,
    DatetimeInputComponent,
    SwitchInputComponent,
    DropdownInputComponent
    
  ],
  imports: [
 CommonModule
 
  ],
  exports: [
    EmailInputComponent,
    PasswordInputComponent,
    TextInputComponent,
    TextareaInputComponent,
    SelectInputComponent,
    SearchInputComponent,
    DatetimeInputComponent,
    SwitchInputComponent,
    DropdownInputComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
