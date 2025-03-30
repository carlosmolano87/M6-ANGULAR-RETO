import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  carouselItems = [
    { 
      image: 'assets/carrusel1.jpg', 
      title: 'Nueva Tarjeta de Crédito Oro', 
      description: 'Obtén beneficios exclusivos en tus compras con nuestra nueva Tarjeta de Crédito Oro Bancolombia.'
    },
    { 
      image: 'assets/carrusel2.jpg', 
      title: 'Cashback del 10% en restaurantes', 
      description: 'Disfruta un 10% de devolución en tus comidas favoritas pagando con tu tarjeta Bancolombia.'
    },
    { 
      image: 'assets/carrusel3.jpg', 
      title: 'Tu Préstamo Preaprobado', 
      description: 'Consulta si tienes un préstamo preaprobado y haz realidad tus proyectos sin trámites complicados.'
    }
  ];
  
  currentIndex = 0;

  nextSlide() {
    if (this.currentIndex < this.carouselItems.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Reinicia al primer slide
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.carouselItems.length - 1; // Vuelve al último slide
    }
  }
}
