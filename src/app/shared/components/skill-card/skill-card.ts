import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  icon?: string;
  title: string;
  description?: string;
  technologies: string[];
}

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
  @Input({ required: true }) skill!: Skill;

  get iconClass(): string {
    return this.skill.icon ? this.skill.icon : '';
  }
}
