import { Component, Input } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';
import { TransactionsService } from '../service/transactions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [ClockComponent],
  template: `
    <p>{{ transactionDetail.id }}</p>
    <p>{{ transactionDetail.label }}</p>
    <p>{{ transactionDetail.date }}</p>
    <p>{{ transactionDetail.amount }}</p>
    <p>{{ transactionDetail.balance }}</p>
  `,
  styles: ``,
})
export class TransactionDetailComponent {
  id = '';
  transactionDetail: any;

  constructor(
    private route: ActivatedRoute,
    private service: TransactionsService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.service.getTransactionDetail(this.id).subscribe((response) => {
      this.transactionDetail = response;
    });
  }
}
