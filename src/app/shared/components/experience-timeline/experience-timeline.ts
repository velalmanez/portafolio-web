import { Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  isCurrent: boolean;
}

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  imports: [],
  templateUrl: './experience-timeline.html',
  styleUrl: './experience-timeline.css',
})
export class ExperienceTimeline {
  readonly experiences: Experience[] = [
    {
      company: 'Grupo Financiero Inbursa',
      role: 'Analista de Sistemas',
      location: 'CDMX',
      period: 'Marzo 2026 - Actualidad',
      description: 'Automatización de encuestas y reportes analíticos. Modernización de aplicaciones core con C# y .NET bajo mejora continua.',
      technologies: ['.NET', 'C#', 'Angular', 'SQL Server', 'Oracle', 'Scrum'],
      isCurrent: true,
    },
    {
      company: 'Grupo Exux',
      role: 'Full Stack Developer',
      location: 'CDMX',
      period: 'Marzo 2024 - Febrero 2026',
      description: 'Desarrollo de sistemas corporativos escalables, optimización de SQL Server y migración hacia Angular, Nest.JS y APIs desacopladas.',
      technologies: ['Angular', 'Nest.JS', 'ASP.NET', 'SQL Server'],
      isCurrent: false,
    },
    {
      company: 'IIMAS - UNAM',
      role: 'Full Stack Developer',
      location: 'Investigación universitaria',
      period: 'Enero 2025 - Julio 2025',
      description: 'Plataforma web desacoplada para gestión documental, manejo de funciones por asignación de roles e integración entre Angular y microservicios de baja latencia en Go.',
      technologies: ['Go', 'Angular', 'REST APIs', 'MySQL','SCRUM'],
      isCurrent: false,
    },
  ];
}
