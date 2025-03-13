import { Component } from '@angular/core';

@Component({
  selector: 'cas-counter',
  imports: [],
  template: `
    <h3>Counter</h3>
    <div>
      <button (click)="changeCount(-1)" [disabled]="count <= -5">➖</button>
      <output [class]="{ negative: count < 0 }">{{ count }}</output>
      <button (click)="changeCount(+1)" [disabled]="count >= 5">➕</button>
    </div>
    <div>
      <button (click)="reset()">Reset</button>
    </div>
    @if (count === 5) {
      <p>¡Has llegado al límite superior!</p>
    }
    @if (count === -5) {
      <p>¡Has llegado al límite inferior!</p>
    }
  `,
  styles: `
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    output {
      margin: 0;
      font-size: 1.5rem;
      width: 50px;
      text-align: center;
    }
    .negative {
      color: red;
    }
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `,
})
export class CounterComponent {
  count = 0;

  changeCount(value: number) {
    this.count += value;
  }
  reset() {
    this.count = 0;
  }
}
