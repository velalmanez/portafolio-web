import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ProjectVariant = 'default' | 'violet' | 'green';

export interface Project {
  label: string;
  title: string;
  description: string;
  technologies: string[];
  textUrl?: string;
  githubUrl?: string;
  variant?: ProjectVariant;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;

  get variantClass(): string {
    if (this.project.variant === 'violet') return 'project-label-violet';
    if (this.project.variant === 'green') return 'project-label-green';
    return '';
  }

  get tagsVariantClass(): string {
    if (this.project.variant === 'violet') return 'tags-violet';
    if (this.project.variant === 'green') return 'tags-green';
    return '';
  }
}
