import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
})
export class AppModule { }

bootstrapApplication(AppModule, {
    providers: [
        AppComponent,
        provideAnimations()
    ]
})