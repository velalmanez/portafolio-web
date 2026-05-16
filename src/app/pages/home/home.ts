import { Component } from '@angular/core';
import { ROUTES } from '../../shared/constants/constants';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

    instagramUrl = ROUTES.INSTAGRAMURL; 
    linkedinUrl = ROUTES.LINKEDINURL;
    githubUrl = ROUTES.GITHUBURL;
    cvUrl = ROUTES.CVURL;
}
