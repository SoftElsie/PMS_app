import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datetime-input',
  standalone: false,
  templateUrl: './datetime-input.component.html',
 styleUrls: ['../../shared/shared.component.css']
})
export class DatetimeInputComponent {
@Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() state: 'default' | 'error' | 'success' | 'focus' | 'hover' = 'default';
  @Input() helperText: string = '';
}
