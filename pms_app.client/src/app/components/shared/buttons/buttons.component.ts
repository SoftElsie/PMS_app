import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
 

})
export class ButtonsComponent {
  @Input() label: string = 'Button';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'md';
  @Input() disabled: boolean = false;
}

