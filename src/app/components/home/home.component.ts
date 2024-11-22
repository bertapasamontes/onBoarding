import { Component, inject, Input} from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../../services/steps.service';
import { IStep } from '../../interfaces/i-step';

@Component({
  selector: 'app-home',
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  instruccionesService = inject(StepsService);
  instrucciones: IStep[] = []; //variable para uardar array de frases. Con el Input() le indicamos que lo queremos pasar hacia el componente hijo.

  constructor() { 
    this.loadInstrucciones();
  }

  loadInstrucciones() {
    this.instrucciones = this.instruccionesService.getInstrucciones();
  }
  ngOnInit(): void {
    console.log('Instrucciones desde home:', this.instrucciones);
  }
}


