import { Component } from '@angular/core';
import { NavbarItem } from '../../../core/class/navbar-item';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {

  navbarItems: NavbarItem[] = [
    { label: 'Inicio', route: '#inicio' },
    { label: 'Experiencia', route: '#experiencia' },
    { label: 'Proyectos', route: '#proyectos' },
    { label: 'Skills', route: '#skills' },
    { label: 'Educacion', route: '#educacion' },
    { label: 'Contacto', route: '#contacto' }
  ];

  scrollToSection(event: Event, route: string): void {
    const sectionId = route.replace(/^#/, '');
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${sectionId}`);
  }

}
