import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-input',
  standalone: false,
  templateUrl: './select-input.component.html',
  styleUrls: ['../../shared/shared.component.css']
})
export class SelectInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() state: 'default' | 'error' | 'success' | 'focus' | 'hover' = 'default';
  @Input() helperText: string = '';
  @Input() options: string[] = [];
}