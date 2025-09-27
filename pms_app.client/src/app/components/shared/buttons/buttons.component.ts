import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'

})
export class ButtonsComponent {
  @Input() label: string = 'Button';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'md';
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;
  @Input() darkMode: boolean = false;
  @Input() isHovered: boolean = false;
}

