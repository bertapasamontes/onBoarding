import { Component, Input } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { IStep } from '../../interfaces/i-step';

@Component({
  selector: 'app-escena',
  imports: [NgFor, CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {
[x: string]: any;

  @Input() instrucciones: IStep[] = [];

  ngOnInit(): void {
    console.log('Instrucciones:', this.instrucciones);
  }

}
