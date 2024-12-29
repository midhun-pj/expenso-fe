import { Component } from '@angular/core';
import { PageHeadingComponent } from '../../shared/page-heading';
import { NoContentComponent } from '../../shared/no-content';
import { CustomTabComponent } from '../../shared/custom-tab';
import { ICustomTab } from '../../models/app.interface';
import { COMMON_TYPES } from '../../models/app.constants';

@Component({
  selector: 'app-transactions',
  imports: [PageHeadingComponent, NoContentComponent, CustomTabComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  typeOfTransactions: ICustomTab[] = [
    {
      name: 'All',
      id: 'all',
    },
    {
      name: 'Income',
      id: 'income-tr'
    },
    {
      name: 'Expense',
      id: 'expense-tr'
    },
  ];
  activeTab = this.typeOfTransactions[0].id;

  tabChanged(id: string) {
    this.activeTab = id;
  }
}
