import { Routes } from '@angular/router';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionsComponent } from './transactions/transactions.component';

export const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
  },
  {
    path: 'detail/:id',
    component: TransactionDetailComponent,
  },
];
