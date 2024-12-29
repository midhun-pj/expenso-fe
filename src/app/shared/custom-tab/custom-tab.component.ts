import { Component, input, output } from '@angular/core';
import { ICustomTab } from '../../models/app.interface';

@Component({
  selector: 'app-custom-tab',
  imports: [],
  templateUrl: './custom-tab.component.html',
  styleUrl: './custom-tab.component.scss',
})
export class CustomTabComponent {
  tabConfig = input<ICustomTab[]>();
  activeTabId = input<string>('');

  valueChanged = output<string>();

  changeTab(id: string) {
    this.valueChanged.emit(id);
  }
}
