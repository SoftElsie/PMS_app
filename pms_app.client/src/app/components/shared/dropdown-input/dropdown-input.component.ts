import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-input',
  standalone: false,
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['../../shared/shared.component.css']
})
export class DropdownInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() state: 'default' | 'error' | 'success' | 'focus' | 'hover' = 'default';
  @Input() helperText: string = '';
  @Input() options: string[] = [];
  showOptions: boolean = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}