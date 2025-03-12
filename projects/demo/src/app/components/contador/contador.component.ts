import { Component } from '@angular/core';

@Component({
  selector: 'cas-contador',
  template: `<div style="text-align: center;">
    <h1>
      Contador: <span [class]="count < 0 ? 'negative' : ''">{{ count }}</span>
    </h1>
    <button (click)="decrementar()" [disabled]="count <= -5">
      Decrementar
    </button>
    <button (click)="reset()">Reiniciar</button>
    <button (click)="incrementar()" [disabled]="count >= 5">Incrementar</button>
    @if (count === 5) {
      <p>Solo llega hasta {{ count }}</p>
    }
    @if (count === -5) {
      <p>Solo llega hasta {{ count }}</p>
    }
  </div>`,

  //<button (click)="changeCount(-1)">Decrementar</button>
  //<h1>Contador: {{ count }}</h1>
  //<button (click)="changeCount(+1)">Incrementar</button>
  styles: [
    `
      button {
        margin: 5px;
        padding: 10px 20px;
        font-size: 16px;
      }
      .negative {
        color: red;
      }
    `,
  ],
})
export class ContadorComponent {
  count = 0;
  /*changeCount(value:number){
      this.count += value;
  }
  */
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
