import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import animations module

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), BrowserAnimationsModule],
}).catch((err) => console.error(err));
