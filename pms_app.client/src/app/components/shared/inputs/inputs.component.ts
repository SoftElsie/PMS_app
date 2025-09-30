import { Component, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-inputs',
  standalone: false,
  template: `<ng-content></ng-content>`,
  styleUrls: ['../../shared/shared.component.css']
})
export class InputsComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() state: 'default' | 'error' | 'success' | 'focus' | 'hover' = 'default';
  @Input() helperText: string = '';
  @Input() options: string[] = []; // For select and dropdown
}

