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
// [x: string]: any;

  @Input() instrucciones: IStep[] = [];

  ngOnInit(): void {
    console.log('Instrucciones:', this.instrucciones);
  }

  currentStep = 0;
  bolitaActiva = true;

  siguienteCarta(): void{
    if(this.currentStep < this.instrucciones.length-1){
      this.currentStep++;
      console.log("currentStep: ", this.currentStep);
    }
  }

  anteriorCarta(): void{
    if(this.currentStep > 0){
      this.currentStep--;
      console.log("currentStep: ", this.currentStep);
    }
  }

}
