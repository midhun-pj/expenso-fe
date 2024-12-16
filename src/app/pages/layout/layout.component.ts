import { Component } from '@angular/core';
import { ResponsiveMenuComponent } from '../../shared/responsive-menu/responsive-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [ResponsiveMenuComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
