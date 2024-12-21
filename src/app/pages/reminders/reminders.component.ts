import { Component } from '@angular/core';
import { PageHeadingComponent } from '../../shared/page-heading';
import { NoContentComponent } from '../../shared/no-content';

@Component({
  selector: 'app-reminders',
  imports: [PageHeadingComponent, NoContentComponent],
  templateUrl: './reminders.component.html',
  styleUrl: './reminders.component.scss'
})
export class RemindersComponent {

}
