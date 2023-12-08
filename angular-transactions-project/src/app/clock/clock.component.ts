import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [],
  template: `
    <div>
      {{ time }}
    </div>
  `,
  styles: ``,
})
export class ClockComponent {
  time = new Date();

  ngOnInit() {
    this.getCurrentDate();
  }

  getCurrentDate() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
