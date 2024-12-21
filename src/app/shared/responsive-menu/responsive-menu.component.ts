import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface IMenuItem {
  name: string;
  iconPath: string;
  routePath: string;
  iconPathActive: string;
}

@Component({
  selector: 'app-responsive-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './responsive-menu.component.html',
  styleUrl: './responsive-menu.component.scss'
})
export class ResponsiveMenuComponent {
  menuItems: IMenuItem[] = [{
    name: 'Home',
    iconPath: 'images/home.png',
    iconPathActive: 'images/home_active.png',
    routePath: '/dashboard'
  }, {
    name: 'Transactions',
    iconPath: 'images/transaction.png',
    iconPathActive: 'images/transaction_active.png',
    routePath: '/transactions'
  }, {
    name: 'Categories',
    iconPath: 'images/category.png',
    iconPathActive: 'images/category_active.png',
    routePath: '/categories'
  }, {
    name: 'Reminders',
    iconPath: 'images/reminder.png',
    iconPathActive: 'images/reminder_active.png',
    routePath: '/reminders'
  }]
}
