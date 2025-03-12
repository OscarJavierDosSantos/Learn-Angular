import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContadorComponent } from './components/contador/contador.component';

@Component({
  selector: 'cas-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContadorComponent,
  ],
  template: `
    <cas-header>
      <cas-menu />
    </cas-header>
    <main>
      <p>Ejemplo de Componente Contador</p>
      <cas-contador />
      <p>Ejemplo de Componente Contador</p>
      <router-outlet />
    </main>
    <cas-footer />
  `,
  styles: [],
})
export class AppComponent {}
