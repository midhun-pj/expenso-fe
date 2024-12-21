import { Component } from '@angular/core';
import { PageHeadingComponent } from '../../shared/page-heading';
import { NoContentComponent } from '../../shared/no-content';

@Component({
  selector: 'app-transactions',
  imports: [PageHeadingComponent, NoContentComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

}
