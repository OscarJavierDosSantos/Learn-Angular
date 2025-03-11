import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Patata } from './patata';

@Component({
  selector: 'cas-root',
  imports: [RouterOutlet, Patata],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <cas-patata></cas-patata>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'demo';
}
