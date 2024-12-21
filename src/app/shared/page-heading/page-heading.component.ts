import { Component, input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-heading',
  imports: [],
  templateUrl: './page-heading.component.html',
  styleUrl: './page-heading.component.scss'
})
export class PageHeadingComponent {

  constructor(private location: Location) { }

  heading = input();

  goBack() {
    this.location.back();
  }
}
