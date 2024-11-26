import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onBoarding';
}
bootstrapApplication(AppComponent, {
  providers: [
      AppComponent,
      provideAnimations(),
  ]
})