import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private url = '../assets/transactions.json';

  constructor(private httpClient: HttpClient) {}

  getTransactions() {
    return this.httpClient.get(this.url);
  }

  getTransactionDetail(id: string) {
    return this.httpClient.get('../assets/data/' + id + '.json');
  }
}
