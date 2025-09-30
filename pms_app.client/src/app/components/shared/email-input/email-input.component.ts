import { Component, Input } from '@angular/core';
import { InputsComponent } from '../inputs/inputs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-input',
  standalone: false,
  templateUrl: './email-input.component.html',
  styleUrls: ['../../shared/shared.component.css']
})

export class EmailInputComponent extends InputsComponent {
  @Input() type: 'email' = 'email';
  @Input() isAvailable: boolean = false; 
}