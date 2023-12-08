import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
  operation: string = '+';
  result: number = 0;
  history: Array<{
    timestamp: Date;
    firstNumber: number;
    operation: string;
    secondNumber: number;
    result: number;
  }> = [];

  calculate() {
    if (this.operation) {
      const operationResult = eval(
        `${this.firstNumber} ${this.operation} ${this.secondNumber}`
      );
      this.result = operationResult;

      this.addHistoryItem();
    }
  }

  addHistoryItem() {
    this.history.push({
      timestamp: new Date(),
      firstNumber: this.firstNumber,
      operation: this.operation,
      secondNumber: this.secondNumber,
      result: this.result,
    });
  }

  setFirstNumber(event: any) {
    this.firstNumber = event.target!.value;
  }
  setOperation(event: any) {
    this.operation = event.target!.value;
  }
  setSecondNumber(event: any) {
    this.secondNumber = event.target!.value;
  }

  deleteItem(item: any) {
    const index = this.history.indexOf(item);
    this.history.splice(index, 1);
  }
}
