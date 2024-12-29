import { Component, signal } from '@angular/core';
import { PageHeadingComponent } from '../../shared/page-heading';
import { NoContentComponent } from '../../shared/no-content';
import { CustomTabComponent } from '../../shared/custom-tab';
import { ICustomTab } from '../../models/app.interface';
import { COMMON_TYPES } from '../../models/app.constants';

@Component({
  selector: 'app-categories',
  imports: [PageHeadingComponent, NoContentComponent, CustomTabComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  typeOfCategories = signal<ICustomTab[]>(COMMON_TYPES);
  activeTab = this.typeOfCategories()[0].id;

  tabChanged(id: string) {
    this.activeTab = id;
  }
}
