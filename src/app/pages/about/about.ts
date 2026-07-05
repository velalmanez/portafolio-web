import { Component } from '@angular/core';
import { CertificadoItem } from '../../core/class/certificado-item';
import { CONSTANTS } from '../../shared/constants/constants';
import { CardCertificado } from '../../shared/components/card-certificado/card-certificado';

@Component({
  selector: 'app-about',
  imports: [CardCertificado],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  urlImage: string = CONSTANTS.ROUTES.IMG_FACULTAD;
  certificados: CertificadoItem[] = [
    {
      title:'Data Base Fundations',
      institution: 'Oracle Academy',
      date: '2023',
      description: 'Introducción a bases de datos relacionales',
      link: CONSTANTS.ROUTES.C_BDURL,
      imageUrl: CONSTANTS.ROUTES.IMG_DB
    },
    {
      title: 'Relational Database Systems',
      institution: 'COURSERA UNAM',
      date: '2023',
      description: 'Sistemas de bases de datos relacionales',
      link: CONSTANTS.ROUTES.C_RDBURL,
      imageUrl: CONSTANTS.ROUTES.IMG_DB_II
    },
    {
      title: 'IA generativa en el aula',
      institution: 'COURSERA UNAM',
      date: '2024',
      description: 'Curso sobre el uso de IA generativa en el ámbito educativo',
      link: CONSTANTS.ROUTES.C_IAURL,
      imageUrl: CONSTANTS.ROUTES.IMG_IA
    },
    {
      title: 'Introduction to Data Science',
      institution: 'CISCO Networking Academy',
      date: '2023',
      description: 'Introducción a la ciencia de datos',
      link: CONSTANTS.ROUTES.C_DSURL
    },
    {
      title: 'Fundamentos de Python 1',
      institution: 'CISCO Networking Academy',
      date: '2023',
      description: 'Curso de introducción a la programación con Python',
      link: CONSTANTS.ROUTES.C_PYTHIONFURL
    },
    {
      title:'AWS S3 Basics',
      institution: 'COURSERA PROJECT NETWORK',
      date: '2023',
      description: 'Introducción a los servicios de almacenamiento en la nube de AWS',
      link: CONSTANTS.ROUTES.C_AWSURL
    }
  ]
}
