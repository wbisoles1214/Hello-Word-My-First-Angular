import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h1>Hello Angular World</h1>',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-angular-app';
}
