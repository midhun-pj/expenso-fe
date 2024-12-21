import { Component } from '@angular/core';
import { PageHeadingComponent } from '../../shared/page-heading';
import { NoContentComponent } from '../../shared/no-content';

@Component({
  selector: 'app-categories',
  imports: [PageHeadingComponent, NoContentComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

}
