import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRoutesModule } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppRoutesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
}
