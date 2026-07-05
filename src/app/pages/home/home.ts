import { Component } from '@angular/core';
import { CONSTANTS } from '../../shared/constants/constants';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
    urlAvatar: string = CONSTANTS.ROUTES.IMG_IVAN;
    linkedinUrl: string = CONSTANTS.ROUTES.LINKEDINURL;
    githubUrl: string = CONSTANTS.ROUTES.GITHUBURL;
    cvUrl: string = CONSTANTS.ROUTES.CVURL;
    fuileNameDownloadCV: string = CONSTANTS.TEXTOS.FILE_NAME_DOWNLOAD_CV;
}
