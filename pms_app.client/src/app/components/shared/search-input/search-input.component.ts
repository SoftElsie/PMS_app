import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  standalone: false,
  templateUrl: './search-input.component.html',
  styleUrls: ['../../shared/shared.component.css']
})
export class SearchInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() state: 'default' | 'error' | 'success' | 'focus' | 'hover' = 'default';
  @Input() helperText: string = '';
}