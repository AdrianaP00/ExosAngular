import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  template: `
    <p
      style="
        font-family:{{ font }};
        font-size:{{ size }}px;
        display:flex;
        justify-content:{{ alignment }};
      "
    >
      Hello {{ name }}!
    </p>
  `,
  styles: ``,
})
export class ResultComponent {
  @Input() name = '';
  @Input() font = '';
  @Input() size = '';
  @Input() alignment = '';
}
