import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {

  // Esta é a lista das imagens que serão mostradas no carrossel.
  images = [
    '../../../assets/imagens/carousel-1.png',
    '../../../assets/imagens/carousel-2.png',
    '../../../assets/imagens/carousel-3.png',
    '../../../assets/imagens/carousel-4.png',
    '../../../assets/imagens/carousel-5.png'
  ];

  // A variável "currentSlide" mantém o índice da imagem que está sendo mostrada atualmente.
  currentSlide = 0;
  // A variável "intervalId" irá guardar o ID do intervalo que é criado quando o carrossel é iniciado.
  intervalId: any;

  ngOnInit() {
    // Quando o componente é inicializado, o carrossel é iniciado.
    this.startCarousel();
  }

  ngOnDestroy() {
    // Quando o componente é destruído, o intervalo do carrossel é interrompido.
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel() {
    // Aqui, um intervalo é criado. A cada 2 segundos, a função "nextSlide" é invocada.
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2000); 
  }

  nextSlide() {
    // A função "nextSlide" incrementa o valor de "currentSlide". 
    // Se "currentSlide" for igual ou maior que o número de imagens, seu valor é resetado para 0.
    this.currentSlide++;
    if (this.currentSlide >= this.images.length) {
      this.currentSlide = 0;
    }
  }

  changeSlide(index: number) {
    // A função "changeSlide" muda a imagem atual do carrossel para a imagem no índice passado como argumento.
    // Ela também interrompe o intervalo atual e inicia um novo.
    this.currentSlide = index;
    clearInterval(this.intervalId);
    this.startCarousel();
  }

}
