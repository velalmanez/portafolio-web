import { Component, OnDestroy, signal } from '@angular/core';

interface StatSlide {
  value: string;
  label: string;
}

@Component({
  selector: 'app-stats-grid',
  standalone: true,
  imports: [],
  templateUrl: './stats-grid.html',
  styleUrl: './stats-grid.css',
})
export class StatsGrid implements OnDestroy {
  readonly statSlides: StatSlide[][] = [
    [
      { value: '+2', label: 'Años de experiencia' },
      { value: '+10', label: 'Proyectos desarrollados' },
      { value: 'Scrum', label: 'Metodología de desarrollo' },
    ],
    [
      { value: 'UNAM', label: 'Ing. Computación' },
      { value: 'Go', label: 'Backend de alto rendimiento' },
      { value: '.NET', label: 'Soluciones empresariales' },
    ],
    [
      { value: 'Full Stack', label: 'Desarrollo end-to-end' },
      { value: 'AI Core', label: 'Agentes y soluciones RAG' },
      { value: 'DevOps', label: 'Infraestructura y CI/CD' },
    ],
  ];

  readonly currentSlide = signal([0, 0, 0]);
  private readonly carouselInterval: ReturnType<typeof setInterval>;

  constructor() {
    this.carouselInterval = setInterval(() => this.showNextSlide(), 5000);
  }

  showNextSlide(): void {
    this.currentSlide.update((slideIndexes) =>
      slideIndexes.map(
        (slideIndex, cardIndex) => (slideIndex + 1) % this.statSlides[cardIndex].length
      )
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.carouselInterval);
  }
}
