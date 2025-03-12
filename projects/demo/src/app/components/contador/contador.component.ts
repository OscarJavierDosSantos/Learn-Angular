import { Component } from '@angular/core';

@Component({
  selector: 'cas-contador',
  template: `<div style="text-align: center;">
    <h1>Contador: {{ count }}</h1>
    <button (click)="incrementar()">Incrementar</button>
    <button (click)="decrementar()">Decrementar</button>
    <button (click)="reset()">Reiniciar</button>
  </div>`,
  styles: [
    `
      button {
        margin: 5px;
        padding: 10px 20px;
        font-size: 16px;
      }
    `,
  ],
})
export class ContadorComponent {
  count = 0;

  incrementar(): void {
    this.count++;
  }

  decrementar(): void {
    this.count--;
  }

  reset(): void {
    this.count = 0;
  }
}
