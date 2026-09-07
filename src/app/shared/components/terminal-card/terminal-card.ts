import { Component } from '@angular/core';
import { CONSTANTS } from '../../constants/constants';

@Component({
  selector: 'app-terminal-card',
  imports: [],
  templateUrl: './terminal-card.html',
  styleUrl: './terminal-card.css',
})
export class TerminalCard {
  TXT = {
    NOMBRE_COMPLETO: CONSTANTS.TEXTOS.NOMBRE_COMPLETO
  }
}
