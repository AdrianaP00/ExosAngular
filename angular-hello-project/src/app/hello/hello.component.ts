import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>Put here your name</p>
      <input
        (change)="setName($event)"
        type="text"
        id="name"
        name="name"
        size="10"
      />
    </div>
    <div>
      <p>Choose the font</p>
      <select (change)="setFont($event)" name="font family">
        <option value="Verdana, Arial, Helvetica, sans-serif">Verdana</option>
        <option value="Gill Sans Extrabold">Gill Sans</option>
        <option value='Times, "Times New Roman", Georgia, serif'>Times New Roman</option>
        <option value="cursive">Cursive</option>
      </select>
    </div>
    <div>
      <p>Choose the size</p>
      <input
        (change)="setSize($event)"
        type="number"
        id="size"
        name="size"
        min="1"
        size="10"
      />
    </div>

    <div>
      <p>Choose the alignment</p>

      <input
        (change)="setAlignment($event)"
        type="radio"
        name="align"
        id="right"
        value="end"
      />
      <label for="right">Right</label>

      <input
        (change)="setAlignment($event)"
        type="radio"
        name="align"
        id="center"
        value="center"
        checked
      />
      <label for="center">Center</label>

      <input
        (change)="setAlignment($event)"
        type="radio"
        name="align"
        id="left"
        value="start"
      />
      <label for="left">Left</label>
    </div>
  `,
  styles: ``,
})
export class HelloComponent {
  @Output() addFontEvent = new EventEmitter<string>();
  @Output() addNameEvent = new EventEmitter<string>();
  @Output() addSizeEvent = new EventEmitter<string>();
  @Output() addAlignEvent = new EventEmitter<string>();
  setFont(event: any) {
    this.addFontEvent.emit(event.target!.value);
  }

  setName(event: any) {
    this.addNameEvent.emit(event.target!.value);
  }

  setSize(event: any) {
    this.addSizeEvent.emit(event.target!.value);
  }

  setAlignment(event: any) {
    this.addAlignEvent.emit(event.target!.value);
  }
}
