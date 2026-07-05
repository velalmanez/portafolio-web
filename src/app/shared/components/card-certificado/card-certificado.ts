import { Component, Input } from '@angular/core';
import { CertificadoItem } from '../../../core/class/certificado-item';

@Component({
  selector: 'app-card-certificado',
  imports: [],
  templateUrl: './card-certificado.html',
  styleUrl: './card-certificado.css',
})
export class CardCertificado {
  @Input() certificado!: CertificadoItem;
}
