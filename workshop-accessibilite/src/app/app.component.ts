import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderA11yComponent } from './header/header-a11y/header-a11y.component';
import { FooterA11yComponent } from './footer/footer-a11y/footer-a11y.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderA11yComponent, FooterA11yComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workshop-accessibilite';
}
