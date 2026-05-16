import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarItem } from '../../../core/class/navbar-item';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {

  navbarItems: NavbarItem[] = [
    { label: 'Inicio', route: '/home' },
    { label: 'Acerca de mi', route: '/about' },
    { label: 'Proyectos', route: '/projects' },
    { label: 'Contacto', route: '/contact' }
  ];

}
