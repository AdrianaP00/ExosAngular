import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HelloComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = '';
  font = '';
  size = '';
  alignment = '';

  getName(name: string) {
    this.name = name;
  }
  getFont(font: string) {
    this.font = font;
  }
  getSize(size: string) {
    this.size = size;
  }
  getAlignment(alignment: string) {
    this.alignment = alignment;
  }
}
