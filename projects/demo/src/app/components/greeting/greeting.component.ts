import { Component } from '@angular/core';

@Component({
  selector: 'cas-greeting',
  imports: [],
  template: `
    <p>
      Hola <span>{{ user || 'amigo' }}</span>
    </p>
    <input type="text" placeholder="Escribe tu nombre" />
    <button (click)="clean()">Borrar</button>
  `,
  styles: `
    :host {
      margin: 5px;
      padding: 10px 20px;
      font-size: 16px;
    }
  `,
})
export class GreetingComponent {
  user = '';
  clean() {
    this.user = '';
  }
}
