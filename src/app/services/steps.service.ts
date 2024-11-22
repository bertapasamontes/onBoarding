import { Injectable } from '@angular/core';
import { IStep } from '../interfaces/i-step';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  instrucciones: IStep[] = [
    {
      title:"Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
    },
    {
      title: "Programa projectes propis:",
      description:"Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
    },
    {
      title: "Procura descansar:",
      description:"Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
    }
  ];
  // constructor() {}
  getInstrucciones(): IStep[]{
    return this.instrucciones;
  }
}
