import { Component, Input } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { IStep } from '../../interfaces/i-step';
import { animate, query, style, transition, trigger } from '@angular/animations';


//animacion a la derecha:
const toRight = [
  //carta actual:
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),

  query(':enter', 
    [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))],
    { optional: true }
  ),

  query(':leave', 
    [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))],
    { optional: true }
  ),
];

const toLeft = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),

  query(':enter', 
    [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))],
    { optional: true }
  ),

  query(':leave', 
    [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))],
    { optional: true }
  ),
];




@Component({
  selector: 'app-escena',
  imports: [NgFor, CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  animations:[
    trigger('animacionSlider', [
      transition(':increment', toRight),
      transition(':decrement', toLeft),
    ])
  ]
})
export class EscenaComponent {
// [x: string]: any;

  @Input() instrucciones: IStep[] = [];

  ngOnInit(): void {
    console.log('Instrucciones:', this.instrucciones);
  }

  currentStep = 0;
  bolitaActiva = true;

  //derecha
  siguienteCarta(): void{
    if(this.currentStep < this.instrucciones.length -1){
      this.currentStep++;
      console.log("currentStep: ", this.currentStep);
    }
  }
  //izquierda
  anteriorCarta(): void{
    if(this.currentStep > 0){
      this.currentStep--;
      console.log("currentStep: ", this.currentStep);
    }
  }

}
