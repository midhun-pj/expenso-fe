import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { PageHeadingComponent } from '../../shared/page-heading';
import { CustomTabComponent } from '../../shared/custom-tab';

import { COMMON_TYPES } from '../../models/app.constants';

@Component({
  selector: 'app-new-category',
  imports: [PageHeadingComponent, CustomTabComponent, ReactiveFormsModule],
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.scss',
})
export class NewCategoryComponent {
  categoryTypes = COMMON_TYPES;
  activeTab = this.categoryTypes[0].id;

  categoryName = new FormControl('', Validators.required);


  tabChanged(id: string): void {
    this.activeTab = id;
  }
}
