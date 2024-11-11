import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'header-a11y',
  standalone: true,
  imports: [MatToolbarModule, MatInputModule],
  templateUrl: './header-a11y.component.html',
  styleUrl: './header-a11y.component.scss'
})
export class HeaderA11yComponent {

  searchInput: string = "";
  
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute) {}

  isAriaCurrentPage(page: string) : boolean {
    return this.router.url === page;
  }

}
