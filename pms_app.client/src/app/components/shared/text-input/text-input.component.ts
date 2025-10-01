import { Component , Input} from '@angular/core';
import { InputsComponent } from '../inputs/inputs.component';

@Component({
  selector: 'app-text-input',
  standalone: false,
  templateUrl: './text-input.component.html',
  styleUrls: ['../shared.component.css']
})

export class TextInputComponent extends InputsComponent {
  @Input() type: 'text' = 'text';
  @Input() isAvailable: boolean = false; // To toggle checkmark or alert
}