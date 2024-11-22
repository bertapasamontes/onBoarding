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
      img:"https://raw.githubusercontent.com/IT-Academy-BCN/sprints-frontend-assets/ae4c30ae2dbeba5e2e884d99f426842b5573b585/sprint-5/time_managment.svg",
      bgcolor:"#FABC3C",
    },
    {
      title: "Programa projectes propis:",
      description:"Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      img:"https://raw.githubusercontent.com/IT-Academy-BCN/sprints-frontend-assets/ae4c30ae2dbeba5e2e884d99f426842b5573b585/sprint-5/programming.svg",
      bgcolor:"#A1B5D8",
    },
    {
      title: "Procura descansar:",
      description:"Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      img: "https://raw.githubusercontent.com/IT-Academy-BCN/sprints-frontend-assets/ae4c30ae2dbeba5e2e884d99f426842b5573b585/sprint-5/meditation.svg",
      bgcolor:"#E4FDE1",
    }
  ];
  // constructor() {}
  getInstrucciones(): IStep[]{
    return this.instrucciones;
  }
}
