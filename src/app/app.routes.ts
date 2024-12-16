import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () => import('./pages/auth/auth.component').then(c => c.AuthComponent)
    },
    {
        path: '',
        loadComponent: () => import('./pages/layout/layout.component').then(c => c.LayoutComponent),
        children: [{
            path: 'dashboard',
            loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent)
        }, {
            path: 'transactions',
            loadComponent: () => import('./pages/transactions/transactions.component').then(c => c.TransactionsComponent)
        },
        {
            path: 'categories',
            loadComponent: () => import('./pages/categories/categories.component').then(c => c.CategoriesComponent)
        },
        {
            path: 'reminders',
            loadComponent: () => import('./pages/reminders/reminders.component').then(c => c.RemindersComponent)
        }, {
            path: '**',
            redirectTo: '/dashboard'
        },]
    },

];
