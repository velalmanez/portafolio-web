import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CONSTANTS } from '../../shared/constants/constants';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Navbar, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
    urlAvatar: string = CONSTANTS.ROUTES.IMG_IVAN;
    linkedinUrl: string = CONSTANTS.ROUTES.LINKEDINURL;
    githubUrl: string = CONSTANTS.ROUTES.GITHUBURL;
    cvUrl: string = CONSTANTS.ROUTES.CVURL;
    fuileNameDownloadCV: string = CONSTANTS.TEXTOS.FILE_NAME_DOWNLOAD_CV;

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
