import { Component } from '@angular/core';
import { TransactionsService } from '../service/transactions.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` <table class="transactions-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Label</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Balance</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        @for (item of transactions; track item.id) {
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ item.label }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.balance }}</td>
          <td><a routerLink='detail/{{item.id}}' routerLinkActive="active" target="_blank">Detail</a></td>
        </tr>
        }
      </tbody>
    </table>

    <router-outlet></router-outlet>`,
  styles: `
  .transactions-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .transactions-table tr, .transactions-table th, .transactions-table td {
    border: 1px solid #ccc;
    padding: 5px 8px;
  }
  
  .transactions-table th {
    background-color: #f2f2f2;
  }
  
  .transactions-table .delete-button {
    padding: 0;
    border: none;
    background-color: transparent;
    color: #007bff;
    cursor: pointer;
  }
  
  .transactions-table .delete-button:hover {
    color: red;
  }
  `,
})
export class TransactionsComponent {
  transactions: any;

  constructor(private service: TransactionsService) {}

  async ngOnInit() {
    await this.service.getTransactions().subscribe((response) => {
      this.transactions = response;
    });
  }
}
