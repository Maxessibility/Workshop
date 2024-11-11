import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'header-a11y',
  standalone: true,
  templateUrl: './header-a11y.component.html',
  styleUrl: './header-a11y.component.scss'
})
export class HeaderA11yComponent {

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute) {}

  toggleMenu() : void {

  }

  isAriaCurrentPage(page: string) : boolean {
    return this.router.url === page;
  }

}
