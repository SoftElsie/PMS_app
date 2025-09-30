import { Component ,Input} from '@angular/core';


@Component({
  selector: 'app-password-input',
  standalone: false,
  templateUrl: './password-input.component.html',
  styleUrls: ['../../shared/shared.component.css']
})

export class PasswordInputComponent{
 @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() state: 'default' | 'error' | 'success' | 'focus' | 'hover' = 'default';
  @Input() helperText: string = '';
  @Input() showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  getPasswordToggleClass(): string {
    return this.showPassword ? 'toggle-password show' : 'toggle-password hide';
  }
}