import { Component } from '@angular/core';
import { CertificadoItem } from '../../core/class/certificado-item';
import { ROUTES } from '../../shared/constants/constants';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  certificados: CertificadoItem[] = [
    {
      title:'Data Base Fundations',
      institution: 'Oracle Academy',
      date: '2023',
      description: 'Introducción a bases de datos relacionales',
      link: ROUTES.C_BDURL
    },
    {
      title: 'Relational Database Systems',
      institution: 'COURSERA UNAM',
      date: '2023',
      description: 'Sistemas de bases de datos relacionales',
      link: ROUTES.C_RDBURL
    },
    {
      title: 'IA generativa en el aula',
      institution: 'COURSERA UNAM',
      date: '2024',
      description: 'Curso sobre el uso de IA generativa en el ámbito educativo',
      link: ROUTES.C_IAURL
    },
    {
      title: 'Introduction to Data Science',
      institution: 'CISCO Networking Academy',
      date: '2023',
      description: 'Introducción a la ciencia de datos',
      link: ROUTES.C_DSURL
    },
    {
      title: 'Fundamentos de Python 1',
      institution: 'CISCO Networking Academy',
      date: '2023',
      description: 'Curso de introducción a la programación con Python',
      link: ROUTES.C_PYTHIONFURL
    },
    {
      title:'AWS S3 Basics',
      institution: 'COURSERA PROJECT NETWORK',
      date: '2023',
      description: 'Introducción a los servicios de almacenamiento en la nube de AWS',
      link: ROUTES.C_AWSURL
    }
  ]
}
