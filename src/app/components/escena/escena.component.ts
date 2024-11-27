import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { IStep } from '../../interfaces/i-step';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  imports: [NgFor, CommonModule],
  styleUrls: ['./escena.component.scss'],
})
export class EscenaComponent implements AfterViewInit {
  @Input() instrucciones: IStep[] = [];

  currentStep = 0; // indice inicial de la carta activa (= la 1ª)
  private cards: HTMLElement[] = []; //cartas en el DOM

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // cogiendo las cartas del DOM
    this.cards = Array.from(this.el.nativeElement.querySelectorAll('.carrousel-cards .card'));

    if (this.cards.length === 0) {
      console.error('No se encontraron elementos con la clase .card');
      return;
    }

    // cargando vista inicial
    this.loadShow();
  }

  // canrgando animación del carrusel
  loadShow(): void {
    let stt = 0;

    // config de carta activa
    this.cards[this.currentStep].style.transform = `none`;
    this.cards[this.currentStep].style.zIndex = '1';
    this.cards[this.currentStep].style.filter = 'none';
    this.cards[this.currentStep].style.opacity = '1';

    // config de cartas a la derecha de la activa
    for (let i = this.currentStep + 1; i < this.cards.length; i++) {
      stt++;
      this.cards[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
      this.cards[i].style.zIndex = `${-stt}`;
      this.cards[i].style.filter = 'blur(5px)';
      this.cards[i].style.opacity = stt > 2 ? '0' : '0.6';
    }

    // config de cartas a la izquierda de la activa
    stt = 0;
    for (let i = this.currentStep - 1; i >= 0; i--) {
      stt++;
      this.cards[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
      this.cards[i].style.zIndex = `${-stt}`;
      this.cards[i].style.filter = 'blur(5px)';
      this.cards[i].style.opacity = stt > 2 ? '0' : '0.6';
    }
  }

  // siguiente carta
  siguienteCarta(): void {
    if (this.currentStep < this.cards.length - 1) {
      this.currentStep++;
      this.loadShow();
    }
  }

  // carta anterior
  anteriorCarta(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.loadShow();
    }
  }
}
