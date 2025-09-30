import { Component, Input } from '@angular/core';
import { InputsComponent } from '../inputs/inputs.component';

@Component({
  selector: 'app-textarea-input',
  standalone: false,
  templateUrl: './textarea-input.component.html',
  styleUrls: ['../../shared/shared.component.css']
})

export class TextareaInputComponent extends InputsComponent {}