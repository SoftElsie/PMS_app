import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-switch-input',
  standalone: false,
  templateUrl: './switch-input.component.html',
  styleUrls: ['../../shared/shared.component.css']
})
export class SwitchInputComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() state: 'default' | 'error' | 'success' | 'focus' | 'hover' = 'default';
  @Input() helperText: string = '';
}
