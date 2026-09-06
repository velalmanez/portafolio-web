import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)},
    // {path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent)},
    // {path: 'projects', loadComponent: () => import('./pages/projects/projects').then(m => m.ProjectsComponent)},
    // {path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent)},
    {path: '**', redirectTo: '/home'}
];
