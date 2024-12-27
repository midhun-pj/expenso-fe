import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.component').then((a) => a.AuthComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/layout/layout.component').then((l) => l.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (d) => d.DashboardComponent
          ),
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('./pages/transactions/transactions.component').then(
            (t) => t.TransactionsComponent
          ),
      },
      {
        path: 'transactions-new',
        loadComponent: () =>
          import('./pages/new-transaction/new-transaction.component').then(
            (t) => t.NewTransactionComponent
          ),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./pages/categories/categories.component').then(
            (c) => c.CategoriesComponent
          ),
      },
      {
        path: 'categories-new',
        loadComponent: () =>
          import('./pages/new-category/new-category.component').then(
            (n) => n.NewCategoryComponent
          ),
      },
      {
        path: 'reminders',
        loadComponent: () =>
          import('./pages/reminders/reminders.component').then(
            (r) => r.RemindersComponent
          ),
      },
      {
        path: '**',
        redirectTo: '/dashboard',
      },
    ],
  },
];
