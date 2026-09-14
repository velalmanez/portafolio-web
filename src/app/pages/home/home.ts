import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CONSTANTS } from '../../shared/constants/constants';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TerminalCard } from '../../shared/components/terminal-card/terminal-card';
import { StatsGrid } from '../../shared/components/stats-grid/stats-grid';
import { ExperienceTimeline } from '../../shared/components/experience-timeline/experience-timeline';
import { ProjectCard, type Project } from '../../shared/components/project-card/project-card';
import { SkillCard, type Skill } from '../../shared/components/skill-card/skill-card';
import { Languages } from '../../shared/components/languages/languages';
import { Certificates } from '../../shared/components/certificates/certificates';
import { Contact } from '../../shared/components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, TerminalCard, StatsGrid, ExperienceTimeline, ProjectCard, SkillCard, Languages, Certificates, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  urlAvatar: string = CONSTANTS.ROUTES.IMG_IVAN;
  linkedinUrl: string = CONSTANTS.ROUTES.LINKEDINURL;
  githubUrl: string = CONSTANTS.ROUTES.GITHUBURL;
  cvUrl: string = CONSTANTS.ROUTES.CVURL;
  fuileNameDownloadCV: string = CONSTANTS.TEXTOS.FILE_NAME_DOWNLOAD_CV;

  readonly skills: Skill[] = [
    {
      icon: 'fas fa-code fa-3',
      title: 'Backend & lenguajes',
      description: 'Desarrollo de servidores, APIs REST y servicios robustos',
      technologies: ['C#', 'TypeScript', 'Go', 'Python', 'ASP.NET Core', 'Nest.JS', 'REST APIs'],
    },
    {
      icon: 'fas fa-desktop',
      title: 'Frontend & UI',
      description: 'Interfaces responsivas y experiencias de usuario modernas',
      technologies: ['Angular', 'HTML5', 'CSS3', 'Bootstrap', 'Angular Material'],
    },
    {
      icon: 'fas fa-database',
      title: 'Bases de datos',
      description: 'Diseño, optimización y gestión de datos empresariales',
      technologies: ['SQL Server', 'Oracle', 'PostgreSQL', 'MySQL', 'Query Optimization'],
    },
    {
      icon: 'fas fa-cloud-upload',
      title: 'DevOps e infraestructura',
      description: 'Automatización, containerización y despliegues confiables',
      technologies: ['Docker', 'Linux', 'Nginx', 'GitHub Actions', 'UFW'],
    },
    {
      icon: 'fas fa-robot',
      title: 'IA & agentes inteligentes',
      description: 'Orquestación de agentes autónomos, RAG y soluciones generativas',
      technologies: ['LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'LLM Tool Calling', 'Vector Embeddings'],
    },
  ];

  readonly projects: Project[] = [
    {
      label: 'DESKTOP & WEB APP',
      title: 'Gym Management Platform',
      description: 'Sistema integral de administración para gimnasios enfocado en gestión de clientes, membresías, flujo de pagos y seguimiento de rutinas con arquitectura desacoplada.',
      technologies: ['Go', 'Angular', 'PostgreSQL', 'Wails'],
      textUrl: 'Ver Maqueta de proyecto',
      githubUrl: 'https://www.figma.com/proto/Q3M7uTLypuQWwtDcUQdLes/AppGym?node-id=11-2&t=vPcQMpPeUYXLXYgh-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A2', 
      variant: 'violet',
    },
    {
      label: 'AI ENGINEERING & RAG',
      title: 'Generative AI Intelligent Agents',
      description: 'Agentes inteligentes orquestados con memoria conversacional, llamadas a herramientas externas (tool calling) y flujos RAG para análisis y respuesta automatizada.',
      technologies: ['Python', 'LangChain', 'LangGraph', 'LLMs', 'FastAPI'],
      githubUrl: 'https://github.com/velalmanez/curso-langcahin/tree/main/curso_langchain/tema_2/cv_analizer',
      variant: 'green',
    },
    {
      label: 'DEVOPS & CLOUD INFRASTRUCTURE',
      title: 'Self-Hosted Server & CI/CD Pipeline',
      description: 'Entorno de servidor de producción auto-administrado con arquitectura de contenedores Docker, Reverse Proxy Nginx, Server Hardening (UFW/SSH) y despliegues continuos.',
      technologies: ['Ubuntu Server', 'Docker', 'Nginx', 'GitHub Actions', 'UFW'],
      githubUrl: 'https://github.com/velalmanez/infrastructure-deploy', // Reemplazar por la URL exacta de tu repo
      variant: 'default',
    },
    {
      label: 'ACADEMIC / DATA ENGINEERING',
      title: 'Data Mining & Predictive Analytics',
      description: 'Proyecto académico enfocado en la extracción, limpieza, preparación de datos y aplicación de modelos analíticos de minería de datos para la toma de decisiones.',
      technologies: ['Python', 'Pandas', 'Scikit-Learn', 'SQL Server', 'Jupyter'],
      githubUrl: 'https://github.com/velalmanez/mineria-datos/tree/main/mineria_datos', // Reemplazar por la URL exacta de tu repo
      variant: 'green',
    }
  ];

  private sectionObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll<HTMLElement>('#portfolio-scrollspy > section');
    const links = document.querySelectorAll<HTMLAnchorElement>('#portfolio-navbar .nav-link');

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)?.target as HTMLElement | undefined;
        if (!visibleSection) {
          return;
        }

        links.forEach((link) => link.classList.toggle('active', link.hash === `#${visibleSection.id}`));
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => this.sectionObserver?.observe(section));
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }
}
